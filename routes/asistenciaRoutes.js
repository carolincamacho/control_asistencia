const express= require('express');
const router = express.Router();
const controlador = require('../controllers/asistenciaController');

router.post('/entrada', controlador.registrarEntrada);
router.post('/salida', controlador.registrarSalida);
router.get('/', controlador.obtenerAsistencia);
router.get('/:id', controlador.obtenerAsistenciaporId);
router.get('/estudiante/:id', controlador.obtenerAsistenciaEstudiante);


module.exports = router;