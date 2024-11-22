import ImgInicio from '../../assets/imgInicio.png';
import s from './imagem.module.scss';

export default function imagem() {
    return (
        <>
            <section className={s.container_img}>
                <img className={s.img} src={ImgInicio} alt="" />
                <div className={s.h2_img}>
                    <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
                </div>
            </section>
        </>
    )
}