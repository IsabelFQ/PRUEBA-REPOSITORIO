import Navbar from "../components/Navbar"; 
import "../styles/consultoria.scss";
function Consultoria() {
   return (
    <>
      <Navbar />

      <main className="page-service">
        <h1>Consultoría estratégica</h1>
        <p>
          Acompañamos a empresas y entidades en el diseño,
          desarrollo e implementación de estrategias orientadas
          a la mejora organizativa, la innovación y la eficiencia.
        </p>
      </main>
    </>
  );
}

export default Consultoria;