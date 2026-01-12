require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.error('Error conectando a la base de datos:', e));

// Configuración de EJS y carpeta pública
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/pokemon', require('./router/pokemon'));

// Rutas simples de prueba
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/contacto', (req, res) => res.send('Estamos en contacto'));

// Error 404
app.use((req, res) => {
  res.status(404).render("404", {
    titulo: "Error 404",
    descripcion: "Page Not Found"
  });
});

// Iniciamos servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
