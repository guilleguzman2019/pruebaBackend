const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// Ruta para servir imágenes estáticas
app.use('/imagenes', express.static(path.join(__dirname, 'public/images')));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor de imágenes funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
