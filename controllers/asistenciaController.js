const asistencia = require('../models/asistencia');
const asistencia = require('../models/asistencia');

//REGISTRAR ENTRADA ESTUDIANTE
exports.registrarEntrada = async (req,res)=>{

    //obtener los datos del json que llegaran por el body
    const {estudiante_id}=req.body;
    const ahora = new Date();

    //insertar el nuevo usuario a la BBDD
    const nuevaEntrada ={
        estudiante_id,
        fecha: ahora.toISOString().split('T')[0],            // yyyy-mm-dd
        hora_entrada: ahora.toTimeString().split(' ')[0]           // hh:mm:ss
    };

    //entregar una respuesta al cliente
    const nuevo = await asistencia.create(nuevaEntrada);
        
    res.status(201).json({
        mensaje: `Asistencia de ${estudiante_id} creado con exito`,
        usuario: nuevo
    });

}

//REGISTRAR SALIDA DEL ESTUDIANTE
exports.registrarSalida = async (req,res)=>{

    //obtener los datos del json que llegaran por el body
    const {nombre,correo}=req.body;

    //insertar el nuevo usuario a la BBDD
    const nuevoUsuario ={
        nombre,
        correo
    };

    //entregar una respuesta al cliente
    const nuevo = await Usuario.create(nuevoUsuario);
        
    res.status(201).json({
        mensaje: 'Usuario creado con exito',
        usuario: nuevo
    });

}
//VER TODAS LAS ASISTENCIAS
exports.obtenerAsistencia= async (req, res)=>{
    const asistencia = await asistencia.findAll()
    res.json(asistencia)
};

//VER UNA ASISTENCIA ESPECIFICA
exports.obtenerAsistenciaporId= async (req, res)=>{
    const id=parseInt(req.params.id);

    const usuario = await asistencia.findByPk(id)

    if (!asistencia){
        return res.status(404).json({ mensaje: 'Asistencia no encontrado'});
    }
    res.json(asistencia)
};

//ASISTENCIAS POR ESTUDIANTE
exports.obtenerAsistenciaporId= async (req, res)=>{
    const id=parseInt(req.params.id);

    const usuario = await asistencia.findByPk(id)

    if (!asistencia){
        return res.status(404).json({ mensaje: 'Asistencia no encontrado'});
    }
    res.json(asistencia)
};

