
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/usuarioController');

router.get("/usuarios/todos", controlador.obtenerUsuarios);

//ruta para logear usuarios
router.post('/usuario/ingresar', controlador.ingresarUsuario);

// ruta para registrar usuarios
router.post('/usuario/registrar', controlador.registrarUsuario);



module.exports=router; // Exporta las rutas para que puedan ser utilizadas en index.js

