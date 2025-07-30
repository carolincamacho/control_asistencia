<<<<<<< HEAD
const express = require ('express')//importa el modulo de express
const router = express.Router();//crea un enrutador de express 
const controlador = require ('../controllers/usuarioController')//importa el controlador de usuario

router.get("/usuario/todos", controlador.obtenerUsuarios);

//ruta para logear usuarios
router.post('/usuario/ingresar',controlador.ingresarUsuario);

//ruta para registar usuarios
router.post('/usuario/registrar/', controlador.registrarUsuario)

module.exports=router;//export las rutas para que puedan sser utilizados en index.js
=======

const express = require('express');
const router = express.Router();
const controlador = require('../controllers/usuarioController');

router.get("/usuarios/todos", controlador.obtenerUsuarios);

//ruta para logear usuarios
router.post('/usuario/ingresar', controlador.ingresarUsuario);

// ruta para registrar usuarios
router.post('/usuario/registrar', controlador.registrarUsuario);



module.exports=router; // Exporta las rutas para que puedan ser utilizadas en index.js

>>>>>>> main
