import { useState, useEffect } from 'react';
import './Navbar.scss';
import logoEnyp from "../assets/logo-Enyp.png";
import { Link } from "react-router-dom";
import traducciones from "../assets/traducciones";

const Navbar = ({ idioma, setIdioma }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoEnyp} alt="EnypLogo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li className="nav-item dropdown">
          <a href="/#que-hacemos" className="nav-link">
            {traducciones[idioma].servicios}
          </a>

          <ul className="dropdown-menu">
            <li><Link to="/consultoria">{traducciones[idioma].consultoria}</Link></li>
            <li><Link to="/asistencia">{traducciones[idioma].asistencia}</Link></li>
            <li><Link to="/fondos">{traducciones[idioma].fondos}</Link></li>
            <li><Link to="/innovacion">{traducciones[idioma].innovacion}</Link></li>
          </ul>
        </li><li>
  <a href="/#proyectos" className="nav-link">
    {traducciones[idioma].proyectos}
  </a>
</li>

<li>
  <a href="/#contacto" className="nav-link">
    {traducciones[idioma].contacto}
  </a>
</li>


      </ul>

      <div className="navbar-right">
        <div className="lang-selector">
          <button
            className={`btn-lang ${idioma === 'es' ? 'active' : ''}`}
            onClick={() => setIdioma('es')}
          >
            ES
          </button>

          <button
            className={`btn-lang ${idioma === 'en' ? 'active' : ''}`}
            onClick={() => setIdioma('en')}
          >
            EN
          </button>
        </div>

        <Link to="/login" className="btn-cta">
          {traducciones[idioma].acceso}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;