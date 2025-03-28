import s from './queroDoar.module.scss';
import Logo from '../../assets/queroDoar/Frame.png';
import axios from 'axios';
import { useState } from 'react';

export default function queroDoar() {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [autor, setAutor] = useState('');
    const [link, setLink] = useState('');

    const capturaTitulo = (event) => {
        setTitulo(event.target.value);
        console.log(event.target.value);
    }

    const capturaCategoria = (event) => {
        setTitulo(event.target.value);
    }

    const capturaAutor = (event) => {
        setTitulo(event.target.value);
    }

    const capturaLink = (event) => {
        setTitulo(event.target.value);
    }

    const enviarDados = async () => {
        const urlApi = 'https://api-livros-7h1h.onrender.com/';

        const dados = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dados);
        alert('Livro cadastrado');

        setTitulo('');
        setCategoria('');
        setAutor('');
        setLink('');
    }

    return (
        <>
            <section className={s.container}>
                <div className={s.boxTitle}>
                    <h2 className={s.title}>
                        Por favor, preencha o formulário com suas informações e as informações do Livro
                    </h2>
                </div>
                <form className={s.form} onSubmit={(e) => {e.preventDefault()}}>
                    <div className={s.boxInfo}>
                        <img src={Logo} alt="" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input className={s.input} type="text" placeholder="Titulo" onChange={capturaTitulo} value={titulo} />
                    <input className={s.input} type="text" placeholder="Categoria" />
                    <input className={s.input} type="text" placeholder="Autor"/>
                    <input className={s.input} type="link" placeholder="Link da Imagem"/>
                    <button className={s.button}>Doar</button>
                    {/* colocar butão */}
                </form>
            </section>
        </>
    )
}