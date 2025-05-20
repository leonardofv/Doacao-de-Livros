import s from './queroDoar.module.scss';
import Logo from '../../assets/queroDoar/Frame.png';
import { useState } from 'react';

import axios from 'axios';

export default function QueroDoar() {

    //armazenar dados do livro pelo form
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [autor, setAutor] = useState('');
    const [link, setLink] = useState('');
    const [doador, setDoador] = useState('');

    const capturarTitle = (e) => {
        setTitulo(e.target.value);
    }
    const capturarCategory = (e) => {
        setCategoria(e.target.value);
    }
    const capturarAuthor = (e) => {
        setAutor(e.target.value);
    }
    const capturarImage = (e) => {
        setLink(e.target.value);
    }
    const capturarDoador = (e) => {
        setDoador(e.target.value);
    }

    //objeto com os dados do livro
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const urlApi = 'http://127.0.0.1:5000/doar';

        const data = {
            titulo,
            categoria,
            autor,
            imagem_url: link,
            doador
        };

        await axios.post(urlApi, data);
        alert('Livro cadastrado');

        setTitulo('');
        setCategoria('');
        setAutor('');
        setLink('');
        setDoador('');

    }

    return (
        <section className={s.container}>
            <div className={s.boxTitle}>
                <h2 className={s.title}>
                    Preencha com as informações do Livro
                </h2>
            </div>
            <form className={s.form} onSubmit={(e) => e.preventDefault()}>
                <div className={s.boxInfo}>
                    <img src={Logo} alt="" />
                    <h3>Informações do Livro</h3>
                </div>
                <input className={s.input} type="text" placeholder="Titulo" onChange={capturarTitle} value={titulo}/>
                <input className={s.input} type="text" placeholder="Categoria" onChange={capturarCategory} value={categoria}/>
                <input className={s.input} type="text" placeholder="Autor" onChange={capturarAuthor} value={autor}/>
                <input className={s.input} type="link" placeholder="Link da Imagem" onChange={capturarImage} value={link}/>
                 <input className={s.input} type="text" placeholder="nome do doador" onChange={capturarDoador} value={doador}/>
                <input className={s.button} type='submit' value="Doar" onClick={handleSubmit} />
            </form>
        </section>
    )
}