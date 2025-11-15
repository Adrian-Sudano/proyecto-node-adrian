const express = require("express");
const dayjs = require("dayjs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para parsear JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.send(`
    <h1>Servidor funcionando correctamente</h1>
    <p>Proyecto Node + NPM</p>
    <p>Fecha actual: ${dayjs().format("YYYY-MM-DD HH:mm:ss")}</p>
  `);
});

// Inicializar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
