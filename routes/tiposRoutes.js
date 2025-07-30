const express = require('express');
const router = express.Router();
const controlador = require('../controllers/tiposController');

router.get("/tipos/todos", controlador.tipos);

module.exports=router 
