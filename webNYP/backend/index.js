import express from "express";
import cors from "cors";
import pool from "./db.js";

/* ✅ AQUÍ SE CREA APP (ESTO FALTABA) */
const app = express();

/* MIDDLEWARES */
app.use(cors());
app.use(express.json());

/* RUTA DE PRUEBA */
app.get("/api/test", (req, res) => {
  res.json({ mensaje: "Backend funcionando ✅" });
});

/* LOGIN */
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("LOGIN RECIBIDO");
  console.log("EMAIL:", email);
  console.log("PASSWORD:", password);

  try {
    const result = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1 AND password = $2",
      [email, password]
    );

    console.log("RESULTADO QUERY:", result.rows);

    if (result.rows.length === 0) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    res.json({
      mensaje: "Login correcto",
      usuario: result.rows[0],
    });
  } catch (error) {
    console.error("🔥 ERROR EN LOGIN 🔥");
    console.error(error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
});

/* ARRANCAR SERVIDOR */
app.listen(3001, () => {
  console.log("Backend escuchando en http://localhost:3001");
});