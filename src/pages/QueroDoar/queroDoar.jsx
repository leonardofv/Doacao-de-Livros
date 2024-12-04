import s from './queroDoar.module.scss';
import Logo from '../../assets/queroDoar/Frame.png';

export default function queroDoar() {
    return (
        <>
            <main className={s.container}>
                <div className={s.boxTitle}>
                    <h2 className={s.title}>
                        Por favor, preencha o formulário com suas informações e as informações do Livro
                    </h2>
                </div>
                <form className={s.form}>
                    <div className={s.boxInfo}>
                        <img src={Logo} alt="" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input className={s.input} type="text" placeholder="Titulo" />
                    <input className={s.input} type="text" placeholder="Categoria"/>
                    <input className={s.input} type="text" placeholder="Autor"/>
                    <input className={s.input} type="link" placeholder="Link da Imagem"/>
                    <button className={s.button}>Doar</button>
                </form>
            </main>
        </>
    )
}