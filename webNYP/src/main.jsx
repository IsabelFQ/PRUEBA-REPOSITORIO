/* IMPORTA StrictMode
Sirve para detectar posibles problemas en React
durante el desarrollo */
import { StrictMode } from 'react'

/* IMPORTA createRoot
Permite conectar React con el HTML */
import { createRoot } from 'react-dom/client'

/* IMPORTACIONES DE REACT ROUTER
Sirven para crear navegación entre páginas */
import {
  BrowserRouter, // Activa el sistema de rutas
  Routes,        // Contenedor de rutas
  Route          // Define cada ruta/página
} from "react-router-dom"

/* IMPORTA EL CSS GLOBAL
Se aplica a TODA la aplicación */
import './index.css'

/* IMPORTA LAS PÁGINAS */
import App from './App.jsx'
import Consultoria from './pages/Consultoria.jsx'
import AsistenciaTecnica from './pages/AsistenciaTecnica.jsx'
import FondosEuropeos from './pages/FondosEuropeos.jsx'
import Innovacion from './pages/Innovacion.jsx'

/* BUSCA EL DIV CON ID="root"
que está en index.html

y dentro renderiza toda la aplicación React */
createRoot(document.getElementById('root')).render(

  /* StrictMode analiza posibles errores */
  <StrictMode>

    {/* BrowserRouter activa React Router */}
    <BrowserRouter>

      {/* CONTENEDOR DE TODAS LAS RUTAS */}
      <Routes>

        {/* RUTA PRINCIPAL "/" */}
        {/* Cuando el usuario entra en:
            localhost:5174/

            React muestra:
            App.jsx
        */}
        <Route path="/" element={<App />} />

        {/* RUTA CONSULTORÍA */}
        {/* URL:
            /consultoria

            Página:
            Consultoria.jsx
        */}
        <Route
          path="/consultoria"
          element={<Consultoria />}
        />

        {/* RUTA ASISTENCIA */}
        <Route
          path="/asistencia"
          element={<AsistenciaTecnica />}
        />

        {/* RUTA FONDOS */}
        <Route
          path="/fondos"
          element={<FondosEuropeos />}
        />

        {/* RUTA INNOVACIÓN */}
        <Route
          path="/innovacion"
          element={<Innovacion />}
        />

      </Routes>

    </BrowserRouter>

  </StrictMode>
)