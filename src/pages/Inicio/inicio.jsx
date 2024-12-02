import s from './inicio.module.scss';
// import ImagemInicial from '../../components/Imagem/imgem';
// import Cards from '../../components/Card/card';

import Card1 from '../../assets/card1.png';
import Card2 from '../../assets/card2.png';
import Card3 from '../../assets/card3.png';
import Card4 from '../../assets/card4.png';


export default function inicio() {
    return (
        <main>
            {/* <ImagemInicial/> */}
            {/* <Cards/> */}

            <section className={s.containerCards}>

                <section className={s.post}>
                    <h2 className={s.h2}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
                </section>

                <div className={s.TitleCards}>
                    <h2 className={s.h2Cards}>Por que devo Doar?</h2>
                </div>

                <section className={s.boxCards}>
                    <article className={s.card}>
                        <img className={s.imgCards} src={Card1} alt="" />
                        <p className={s.pCards}>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article> 
                    <article className={s.card}>
                        <img className={s.imgCards} src={Card2} alt="" />
                        <p className={s.pCards}>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article className={s.card}>
                        <img className={s.imgCards} src={Card3} alt="" />
                        <p className={s.pCards}>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article className={s.card}>
                        <img className={s.imgCards} src={Card4} alt="" />
                        <p className={s.pCards}>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>

        </main>
    )
}