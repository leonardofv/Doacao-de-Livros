import s from './doados.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Doar() {
    const [livros, setLivros] = useState([]);
    const [modalOpen, setModalOpen] = useState(false); // Estado para controlar o modal
    const [selectedLivro, setSelectedLivro] = useState(null); // Livro selecionado
    const [cliente, setCliente] = useState({ nome: '', cpf: '' }); // Estado para armazenar nome e CPF

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const response = await axios.get('https://api-livros-7h1h.onrender.com/livros');
                setLivros(response.data);
            } catch {
                console.error('Erro ao buscar livros');
            }
        };
        fetchLivros();
    }, []);

    // Função para abrir o modal e definir o livro selecionado
    const handleEscolher = (livro) => {
        setSelectedLivro(livro);
        setModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setModalOpen(false);
        setSelectedLivro(null);
        setCliente({ nome: '', cpf: '' }); // Limpar os campos do formulário
    };

    // Função para enviar os dados do cliente
    const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar o comportamento padrão do formulário

    // Validação simples
    if (!cliente.nome || !cliente.cpf) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        // Fazer a requisição DELETE para a rota de deletar
        const response = await axios.delete(`https://api-livros-7h1h.onrender.com/deletar/${selectedLivro.id}`, {
            data: {
                nome: cliente.nome,
                cpf: cliente.cpf,
            },
        });

        console.log('Resposta do backend:', response.data);

        // Atualizar a lista de livros removendo o livro escolhido
        setLivros(livros.filter((livro) => livro.id !== selectedLivro.id));

        // Fechar o modal e limpar os campos
        closeModal();
        alert('Livro escolhido com sucesso!');
    } catch (error) {
        console.error('Erro ao processar a escolha:', error.response ? error.response.data : error.message);
        alert('Erro ao processar a escolha. Tente novamente.');
    }
};

    return (
        <section className={s.container}>
            <div className={s.boxH2}>
                <h2 className={s.h2}>Livros Doados</h2>
            </div>
            <section className={s.boxCards}>
                {livros.map((livro, index) => (
                    <div className={s.cards} key={index}>
                        <img className={s.img} src={livro.imagem_url} alt="Livro o protagonista" />
                        <p className={s.title}>{livro.titulo}</p>
                        <p className={s.author}>{livro.autor}</p>
                        <p className={s.category}>{livro.categoria}</p>
                        <button className={s.button} onClick={() => handleEscolher(livro)}>
                            Escolher
                        </button>
                    </div>
                ))}
            </section>

            {/* Modal */}
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Selecionar Livro"
                className={s.modalContent}
                overlayClassName={s.modalOverlay}
            >
                <h3>Livro Selecionado</h3>
                {selectedLivro && (
                    <>
                        <p><strong>Título:</strong> {selectedLivro.titulo}</p>
                        <p><strong>Autor:</strong> {selectedLivro.autor}</p>
                    </>
                )}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            value={cliente.nome}
                            onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            value={cliente.cpf}
                            onChange={(e) => setCliente({ ...cliente, cpf: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">Confirmar</button>
                    <button type="button" onClick={closeModal}>Cancelar</button>
                </form>
            </Modal>
        </section>
    );
}