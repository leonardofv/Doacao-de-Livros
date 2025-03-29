import s from './doados.module.scss';
// import imgProtagonista from '../../assets/Doados/livro1.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Doar() {

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const response = await axios.get('https://api-livros-7h1h.onrender.com/livros');
                setLivros(response.data);
            }catch {
                console.error('Erro ao buscar livros');
            }
        };
        fetchLivros();
    },[])


    return (
        <section className={s.container}>
            <div className={s.boxH2}>
                <h2 className={s.h2}>Livros Doados</h2>
            </div>

            <section className={s.boxCards}>
                {livros.map((livro, index) => (
                    <div className={s.cards} key={index}>
                        <img className={s.img} src={livro.imagem_url} alt="Livro o protagonista" />
                        <p className={s.p}>{livro.titulo}</p>
                        <p className={s.p}>{livro.autor}</p>
                        <p className={s.p}>{livro.categoria}</p>
                    </div>
                ))}
            </section>
        </section>
    )
}