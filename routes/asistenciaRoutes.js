const express= require('express');
const router = express.Router();
const controlador = require('../controllers/asistenciaController');

router.post('/asistencias/entrada', controlador.registrarEntrada);
router.post('/asistencias/salida', controlador.registrarSalida );
router.get('/asistencias', controlador.obtenerAsistencia);
router.get('/asistencias/:id', controlador.obtenerAsistenciaporId);
router.get('/asistencias/estudiante/:id', controlador.obtenerAsistenciaEstudiante);


module.exports = router;