import s from './doados.module.scss';
import imgProtagonista from '../../assets/Doados/livro1.png';
// import Footer from '../../components/Footer/footer';

export default function doar() {
    return (
        <section className={s.container}>
            <div className={s.boxH2}>
                <h2 className={s.h2}>Livros Doados</h2>
            </div>

            <section className={s.boxCards}>
                <div className={s.cards}>
                    <img className={s.img} src={imgProtagonista} alt="Livro o protagonista" />
                    <p className={s.p}>O protagonista</p>
                    <p className={s.p}>Susanne Andrade</p>
                    <p className={s.p}>Ficção</p>
                </div>
                <div className={s.cards}>
                    <img className={s.img} src={imgProtagonista} alt="Livro o protagonista" />
                    <p className={s.p}>O protagonista</p>
                    <p className={s.p}>Susanne Andrade</p>
                    <p className={s.p}>Ficção</p>
                </div>
            </section>
        </section>
    )
}