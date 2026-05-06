import { useState, useEffect } from "react";
import videoFondo from "./assets/video.mp4";
import logoEnyp from "./assets/logo-Enyp.png";
import img2 from './assets/img2.webp';
import "./App.scss";
import Navbar from "./components/Navbar"; 

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="App">
      <Navbar /> 
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={videoFondo} type="video/mp4" />
        </video>
        <div className="overlay"></div> 
      </div>

      <header className={`hero ${visible ? 'is-visible' : ''}`}>
        <div className="hero-content">
          <img src={logoEnyp}
          alt="Logo Enyp Hub"
          className= "main-logo"/>
          <p>Innovación, Financiación & Impacto</p>
          <div className="descubre">Consultoría Estratégica</div>
          <button className="cta-button">Empezar Proyecto</button>
        </div>
      </header>
      {/* --- AQUÍ EMPIEZA LO NUEVO --- */}
      
      <main>
        
        {/* SECCIÓN: ¿Qué hacemos? */}
<section id="que-hacemos" className="section-dark">
  <div className="container">
    
    <h2 className="section-title-dark">¿Qué hacemos?</h2>

    <div className="services-grid">

      {/* CARD 1 */}
      <div className="service-card">
        <h3><span>Consultoría</span> estratégica</h3>
        <p className="subtitle"><strong>Empresarial</strong> y de gestión</p>

        <ul>
          <li>Mejora de la competitividad y la eficiencia organizativa</li>
          <li>Optimización de procesos y estructuras</li>
          <li>Transformación digital y la innovación</li>
          <li>Fortalecimiento institucional y la profesionalización de entidades</li>
        </ul>

        <button className="btn-service">Más información →</button>
      </div>

      {/* CARD 2 */}
      <div className="service-card">
        <h3><span>Asistencia</span> técnica</h3>
<p className="subtitle"><strong>Administración</strong> Pública</p>

<ul>
  <li>Elaboración de estudios y planes estratégicos</li>
  <li>Ejecución y seguimiento de proyectos públicos</li>
  <li>Evaluación y control de actuaciones</li>
  <li>Gestión de convenios y programas públicos</li>
</ul>

<button className="btn-service">Más información →</button>
      </div>

      <div className="service-card">
        <h3><span>Fondos</span> europeos</h3>
<p className="subtitle"><strong>Financiación</strong> y subvenciones</p>

<ul>
  <li>Búsqueda de oportunidades de financiación</li>
  <li>Gestión integral de proyectos (PMO)</li>
  <li>Justificación técnica y económica</li>
  <li>Coordinación y cumplimiento normativo</li>
</ul>

<button className="btn-service">Más información →</button>
      </div>

      <div className="service-card">
        <h3><span>Innovación</span> y digitalización</h3>
<p className="subtitle"><strong>I+D+i</strong> y tecnología</p>

<ul>
  <li>Desarrollo de proyectos de innovación</li>
  <li>Transformación digital de organizaciones</li>
  <li>Implantación de soluciones tecnológicas</li>
  <li>Ciberseguridad y protección de datos</li>
</ul>

<button className="btn-service">Más información →</button>
      </div>

    </div>
  </div>
</section>

{/* SECCIÓN: programas formativos */}
        <section id="formacion" className="section-white">
          <div className="container">
            <h2 className="section-title">Programas formativos</h2>
            
            <div className="cards-grid">
              <div className="card">
                <div className="card-image"><img src={img2} alt="img1Prueba" /> </div>
                <div className="card-content">
                <h3>Emprendimiento y gestión empresarial</h3>
                <p>Personas y familias que buscan en la Fundación el instrumento para llevar a cabo objetivos...</p>
                <button className="btn-more">SABER MÁS →</button>
              </div>
              </div>

              <div className="card">
                <div className="card-image"> <img src={img2} alt="img1Prueba" /> </div>
                <div className="card-content">
                <h3>Innovación y digitalización</h3>
                <p>Colectivos y Asociaciones de carácter personal o profesional que necesitan del régimen fiscal...</p>
                <button className="btn-more">SABER MÁS →</button>
              </div>
              </div>

              <div className="card">
                <div className="card-image"> <img src={img2} alt="img1Prueba" /> </div>
                <div className="card-content">
                <h3>Políticas públicas y desarrollo territorial</h3>
                <p>Marcas, compañías y empresas que necesitan desarrollar su actividad de responsabilidad corporativa...</p>
                <button className="btn-more">SABER MÁS →</button>
              </div>
              </div>
              <div className="card">
                <div className="card-image"> <img src={img2} alt="img1Prueba" /> </div>
                <div className="card-content">
                <h3>Igualdad de género, sostenibilidad y cooperación internacional</h3>
                <p>Marcas, compañías y empresas que necesitan desarrollar su actividad de responsabilidad corporativa...</p>
                <button className="btn-more">SABER MÁS →</button>
              </div>
              </div>
            </div>
          </div>
        </section>
         {/* SECCIÓN: Cómo trabajamos */}
<section id="como-trabajamos" className="section-work">

  <div className="work-container">

    {/* IZQUIERDA */}
    <div className="work-content">

      <h2 className="work-title">
        Cómo trabajamos
      </h2>

      <p className="work-text">
        Acompañamos a empresas y entidades públicas
        mediante soluciones estratégicas, innovación
        y transformación digital.
      </p>

      {/* BLOQUES */}
      <div className="work-grid">

        <div className="work-box">
          Diagnóstico estratégico
        </div>

        <div className="work-box">
          Planificación y financiación
        </div>

        <div className="work-box">
          Implementación de proyectos
        </div>

        <div className="work-box">
          Transformación digital
        </div>

        <div className="work-box">
          Seguimiento y evaluación
        </div>

        <div className="work-box">
          Innovación y sostenibilidad
        </div>

      </div>

    </div>
            </div>
        </section>


      </main>

      {/* --- AQUÍ TERMINA LO NUEVO --- */}

       
    </div> // Cierre de <div className="App">
  );
}

export default App;