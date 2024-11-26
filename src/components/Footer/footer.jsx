import s from './footer.module.scss';
import Facebook from '../../assets/facebook.png'
import X from '../../assets/x.png';
import YouTube from '../../assets/youTube.png';
import Linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';

export default function footer() {
    return (
        <>
            <footer className={s.footer}>
                <section className={s.boxFooter}>
                    <div className={s.divNumero}>
                        <p className={s.numero}>4002-8922</p>
                    </div>
                    <div className={s.divIcons}>
                        <a href=""><img className={s.icons} src={Facebook} alt="" /></a>
                        <a href=""><img className={s.icons} src={X} alt="" /></a>
                        <a href=""><img className={s.icons} src={YouTube} alt="" /></a>
                        <a href=""><img className={s.icons} src={Linkedin} alt="" /></a>
                        <a href=""><img className={s.icons} src={Instagram} alt="" /></a>
                    </div>
                </section>
               
                <section className={s.vaiNaWeb}>
                    <p>
                        Layout desenvolvido pela Vai Na Web para fins educativos - 2024  
                    </p>
                </section>
            </footer>
        </>
    )
}