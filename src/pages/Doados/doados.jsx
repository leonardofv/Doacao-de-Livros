import s from './doados.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Doados() {
    const [livros, setLivros] = useState([]);
    const [modalOpen, setModalOpen] = useState(false); // Estado para controlar o modal
    const [selectedLivro, setSelectedLivro] = useState(null); // Livro selecionado
    const [cliente, setCliente] = useState({ nome: '', email: '' }); // Estado para armazenar nome e email

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/livros');
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
        setCliente({ nome: '', email: '' }); // Limpar os campos do formulário
    };

    // Função para enviar os dados do cliente
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evitar o comportamento padrão do formulário

        // Validação simples
        if (!cliente.nome || !cliente.email) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            // Fazer a requisição DELETE para a rota de deletar
            const response = await axios.delete(`http://127.0.0.1:5000/deletar/${selectedLivro.id}`, {
                data: {
                    nome: cliente.nome,
                    email: cliente.email,
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
    
            <h2 className={s.titleDoados}>Livros Doados</h2>

            <section className={s.boxCards}>
                {livros.map((livro, index) => (
                    <div className={s.card} key={index}>
                        <img className={s.img} src={livro.imagem_url} alt="livro doado" />
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
                {selectedLivro && (
                    <>
                        <p><strong>Título:</strong> {selectedLivro.titulo}</p>
                        <p><strong>Autor:</strong> {selectedLivro.autor}</p>
                    </>
                )}
                <form onSubmit={handleSubmit}>
                    <h3 className={s.titleModal}>Dados do cliente</h3>
                    <div>
                        {/* <label htmlFor="nome">Nome:</label> */}
                        <input
                            type="text"
                            id="nome"
                            value={cliente.nome}
                            onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
                            placeholder="Digite seu Nome"
                            required
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email:</label> */}
                        <input
                            type="email"
                            id="email"
                            value={cliente.email}
                            onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
                            placeholder="Informe seu Email"
                            required
                        />
                    </div>
                    <div className={s.buttonGroup}>
                        <button type="submit" className={s.confirmButton}>Confirmar</button>
                        <button type="button" className={s.cancelButton} onClick={closeModal}>Cancelar</button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}