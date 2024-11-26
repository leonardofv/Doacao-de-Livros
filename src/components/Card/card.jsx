import Card1 from '../../assets/card1.png';
import Card2 from '../../assets/card2.png';
import Card3 from '../../assets/card3.png';
import Card4 from '../../assets/card4.png';
import s from './card.module.scss';

export default function card() {
    return (
        <main className={s.container}>  

            <section className={s.TitleCards}>
                <h2 className={s.h2Cards}>
                    Por que devo doar?
                </h2>
            </section>

            <section className={s.section_card}>
               <article className={s.card}>
                    <img className={s.imgCards} src={Card1} alt="" />
                    <p className={s.pCards}> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
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
            
        </main>
    )
}