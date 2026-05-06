import React,
{ useState, useEffect }
 from 'react';
import './Navbar.scss';
import logoEnyp from "../assets/logo-Enyp.png";
import { Link } from "react-router-dom";
import { traducciones } from '../assets/traducciones.js';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const[idioma, setIdioma] = useState('ES');

    useEffect(() => { const handleScroll = () => {
        //si bajamos más de 50px, cambiamos el estado
        setScrolled(window.scrollY >50);
    };
     window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
    }, []);

    return (
        <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}
            `}>
           
            
            <div className="navbar-logo">
              <a href="/">
    <img src={logoEnyp} alt="EnypLogo" />
  </a>
            </div>
            
            <ul className="navbar-links">
                <li className="nav-item dropdown">
                <a href="/#que-hacemos" className="nav-link">{traducciones[idioma].servicios}</a>


            <ul className="dropdown-menu">
            <li>
              <Link to="/consultoria">
                {traducciones[idioma].consultoria}
              </Link>
            </li>

            <li>
              <Link to="/asistencia">
                {traducciones[idioma].asistencia}
              </Link>
            </li>

            <li>
              <Link to="/fondos">
                {traducciones[idioma].fondos}
              </Link>
            </li>

            <li>
              <Link to="/innovacion">
                {traducciones[idioma].innovacion}
              </Link>
            </li>
          </ul>
        </li>

        <li><a href="/#proyectos">{traducciones[idioma].proyectos}</a></li>
        <li><a href="/#contacto">{traducciones[idioma].contacto}</a></li>
        <li><a href="/#formacion">{traducciones[idioma].formacion}</a></li>
      </ul>

      <div className="navbar-right">
        <div className="lang-selector">
          <button
            className={`btn-lang ${idioma === 'ES' ? 'active' : ''}`}
            onClick={() => setIdioma('ES')}
          >
            ES
          </button>

          <button
            className={`btn-lang ${idioma === 'EN' ? 'active' : ''}`}
            onClick={() => setIdioma('EN')}
          >
            EN
          </button>
        </div>

        <button className="btn-cta">
          {traducciones[idioma].acceso}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;