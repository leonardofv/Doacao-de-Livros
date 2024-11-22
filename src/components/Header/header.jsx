import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import LogoLivro from '../../assets/logoLivro.png';
import Inicio from '../../pages/Inicio/inicio';
import LivrosDoados from '../../pages/Doados/doados'
import QueroDoar from '../../pages/QueroDoar/queroDoar';
import Lupa from '../../assets/search.png';
import s from './header.module.scss';

export default function header() {
    return (
        <BrowserRouter>
            <header className={s.header}>
                <section className={s.boxLogo}>
                    <img className={s.imgLogo} src={LogoLivro} alt="imagem-logo-livro" />
                    <h2 className={s.h2}>Livros Vai na Web</h2>
                </section>
                
                <nav className={s.boxMenu}>
                    <ul className={s.pages_header}>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/doados">Livros Doados</Link></li>
                        <li><Link to="/QueroDoar">Quero Doar</Link></li>
                    </ul>
                </nav>
                
                            
                <div className={s.boxSearch}>
                    <input className={s.input} type="search" placeholder='O que você procura   ?' />
                    <img className={s.lupa} src={Lupa} alt="lupa" />
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/doados' element={<LivrosDoados/>}/>
                <Route path='/QueroDoar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}