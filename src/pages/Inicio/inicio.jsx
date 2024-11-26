// import s from './inicio.module.scss';
import ImagemInicial from '../../components/Imagem/imgem';
import Cards from '../../components/Card/card';

// import Card1 from '../../assets/card1.png';
// import Card2 from '../../assets/card2.png';
// import Card3 from '../../assets/card3.png';
// import Card4 from '../../assets/card4.png';


export default function inicio() {
    return (
        <>
            <ImagemInicial/>
            <Cards/>

            {/* <main>
                <section className={s.post}>
                    <h2 className={s.h2}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
                </section>

                <section className={s.porqueDevoDoar}>
                    <div className={s.boxTitle}>
                        <h2>Por que devo Doar ?</h2>
                    </div>
                    <section className={s.boxCards}>
                        <article>
                            <img src={Card1} alt="" />
                            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                        </article>
                        <article>
                            <img src={Card2} alt="" />
                            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                        </article>
                        <article>
                            <img src={Card3} alt="" />
                            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                        </article>
                        <article>
                            <img src={Card4} alt="" />
                            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                        </article>
                    </section>
                </section>
            </main> */}
        </>
    )
}