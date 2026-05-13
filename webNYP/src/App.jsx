import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

{/* COMPONENTES */}
import Navbar from "./components/Navbar";

/* PÁGINAS */
import Consultoria from "./pages/Consultoria";
import AsistenciaTecnica from "./pages/AsistenciaTecnica";
import FondosEuropeos from "./pages/FondosEuropeos";
import Innovacion from "./pages/Innovacion";
import Login from "./pages/Login";

{/* ASSETS */}
import videoFondo from "./assets/video.mp4";
import logoEnyp from "./assets/logo-Enyp.png";
import img2 from "./assets/img2.webp";

/* TRADUCCIONES */
import traducciones from "./assets/traducciones";

/* ESTILOS */
import "./App.scss";

{/* ======================
   HOME (CON TODO EL SCROLL)
   ====================== */}
function Home({ idioma, setIdioma }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="App">

      {/* NAVBAR */}
      <Navbar idioma={idioma} setIdioma={setIdioma} />

      {/* VIDEO HERO */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={videoFondo} type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      {/* HERO */}
      <header className={`hero ${visible ? "is-visible" : ""}`}>
        <div className="hero-content">
          <img
            src={logoEnyp}
            alt="Logo Enyp Hub"
            className="main-logo"
          />

          <p>{traducciones[idioma].heroTexto}</p>

          <div className="descubre">
            {traducciones[idioma].consultoriaEstrategica}
          </div>

          <button className="cta-button">
            {traducciones[idioma].empezarProyecto}
          </button>
        </div>
      </header>

    
      <main>

        {/* ¿QUÉ HACEMOS? */}
        <section id="que-hacemos" className="section-dark">
          <div className="container">
            <h2 className="section-title-dark">
              {traducciones[idioma].queHacemos}
            </h2>

            <div className="services-grid">

              <div className="service-card">
            
        <h3>
            <span>{traducciones[idioma].consultoriaTitulo}</span>{" "}
            {traducciones[idioma].consultoriaTipo}
          </h3>

        

          <p className="subtitle">
            <strong>{traducciones[idioma].consultoriaAmbitoStrong}</strong>{" "}
            {traducciones[idioma].consultoriaAmbito}
          </p>

          <ul>
            <li>{traducciones[idioma].consultoriaLi1}</li>
            <li>{traducciones[idioma].consultoriaLi2}</li>
            <li>{traducciones[idioma].consultoriaLi3}</li>
            <li>{traducciones[idioma].consultoriaLi4}</li>
          </ul>

          <button className="btn-service">
            {traducciones[idioma].masInfo} →
          </button>
        </div>

        {/* ASISTENCIA TÉCNICA */}
        <div className="service-card">
          <h3>
            <span>{traducciones[idioma].asistenciaTitulo}</span>{" "}
            {traducciones[idioma].asistenciaTipo}
          </h3>

          <p className="subtitle">
            <strong>{traducciones[idioma].asistenciaAmbitoStrong}</strong>{" "}
            {traducciones[idioma].asistenciaAmbito}
          </p>

          <ul>
            <li>{traducciones[idioma].asistenciaLi1}</li>
            <li>{traducciones[idioma].asistenciaLi2}</li>
            <li>{traducciones[idioma].asistenciaLi3}</li>
            <li>{traducciones[idioma].asistenciaLi4}</li>
          </ul>

          <button className="btn-service">
            {traducciones[idioma].masInfo} →
          </button>
        </div>

      </div>
    </div>
  </section>

  {/* PROGRAMAS FORMATIVOS*/}
  <section id="formacion" className="section-white">
    <div className="container">
      <h2 className="section-title">
        {traducciones[idioma].formacion}
      </h2>

      <div className="cards-grid">

        <div className="card">
          <div className="card-image">
            <img src={img2} alt="Formación 1" />
          </div>
          <div className="card-content">
            <h3>{traducciones[idioma].emprendimiento}</h3>
            <p>{traducciones[idioma].textoEmprendimiento}</p>
            <button className="btn-more">
              {traducciones[idioma].masInfo} →
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={img2} alt="Formación 2" />
          </div>
          <div className="card-content">
            <h3>{traducciones[idioma].innovacionFormacion}</h3>
            <p>{traducciones[idioma].innovacionFormacionTexto}</p>
            <button className="btn-more">
              {traducciones[idioma].masInfo} →
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={img2} alt="Formación 3" />
          </div>
          <div className="card-content">
            <h3>{traducciones[idioma].politicasPublicas}</h3>
            <p>{traducciones[idioma].politicasPublicasTexto}</p>
            <button className="btn-more">
              {traducciones[idioma].masInfo} →
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>

 {/* =====================
      CÓMO TRABAJAMOS
      ===================== */}
  <section id="como-trabajamos" className="section-work">
    <div className="work-container">
      <div className="work-content">

        <h2 className="work-title">
          {traducciones[idioma].comoTrabajamos}
        </h2>

        <p className="work-text">
          {traducciones[idioma].comoTrabajamosTexto}
        </p>

        <div className="work-grid">
          <div className="work-box">{traducciones[idioma].workBox1}</div>
          <div className="work-box">{traducciones[idioma].workBox2}</div>
          <div className="work-box">{traducciones[idioma].workBox3}</div>
          <div className="work-box">{traducciones[idioma].workBox4}</div>
        </div>

      </div>
    </div>
  </section>

</main>
        
     {/* ===== FIN DEL SCROLL ===== */}

    </div>
  );
}

{/*=== APP ===*/}
function App() {
  const [idioma, setIdioma] = useState("es");

  return (
    <Routes>
      <Route
        path="/"
        element={<Home idioma={idioma} setIdioma={setIdioma} />}
      />
      <Route path="/consultoria" element={<Consultoria />} />
      <Route path="/asistencia" element={<AsistenciaTecnica />} />
      <Route path="/fondos" element={<FondosEuropeos />} />
      <Route path="/innovacion" element={<Innovacion />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
