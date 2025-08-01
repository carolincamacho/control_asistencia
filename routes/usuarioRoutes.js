
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/usuarioController');

router.get("/usuario/todos", controlador.obtenerUsuario);

//ruta para logear usuarios
router.post('/usuario/ingresar', controlador.ingresarUsuario);

// ruta para registrar usuarios
router.post('/usuario/registrar', controlador.registrarUsuario);

//ruta para eliminar usuarios


//ruta para editar o actualizar usuarios



module.exports=router; // Exporta las rutas para que puedan ser utilizadas en index.js

