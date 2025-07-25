const express = require ("express");// Importa el módulo de Express
const router = express.Router();// Crea un enrutador de Express
const controlador = require ("../controllers/usuarioController")// Importa el controlador de usuarios




//ruta para logear usuarios
router.post('/usuario/ingresar', controlador.ingresarUsuario);

// ruta para registrar usuarios
router.post('/usuario/registrar', controlador.registrarUsuario);



module.exports=router; // Exporta las rutas para que puedan ser utilizadas en index.js