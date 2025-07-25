const express = require ('express')//importa el modulo de express
const router = express.Router();//crea un enrutador de express 
const controlador = require ('../controllers/usuarioController')//importa el controlador de usuario



//ruta para logear usuarios
router.post('/usuario/ingresar',controlador.ingresarUsuario);

//ruta para registar usuarios
router.post('/usuario/registrar/', controlador.registrarUsuario)

module.exports=router;//export las rutas para que puedan sser utilizados en index.js