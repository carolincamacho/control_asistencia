const asistencia = require('../models/asistencia');

//REGISTRAR ENTRADA ESTUDIANTE
exports.registrarEntrada = async (req,res)=>{

    //obtener los datos del json que llegaran por el body
    const {estudiante_id}=req.body;
    const ahora = new Date();
  
    //insertar la nueva entrada a la BBDD
    const nuevaEntrada ={
        estudiante_id,
        fecha: ahora.toISOString().split('T')[0],            // yyyy-mm-dd
        hora_entrada: ahora.toTimeString().split(' ')[0]           // hh:mm:ss
    };

    // //entregar una respuesta al cliente
    const nuevo = await asistencia.create(nuevaEntrada);
        
    res.status(201).json({
        mensaje: `Asistencia de ${estudiante_id} creada con exito`,
        usuario: nuevo
    });

}

//REGISTRAR SALIDA DEL ESTUDIANTE
exports.registrarSalida = async (req,res)=>{

    //obtener los datos del json que llegaran por el body
    const {estudiante_id}=req.body;
    const ahora = new Date();
    const fechaHoy = ahora.toISOString().split('T')[0];
    const horaActual = ahora.toTimeString().split(' ')[0];

    //buscar asistencia del día
        const asistenciaHoy = await asistencia.findOne({
            where: {
                estudiante_id,
                fecha: fechaHoy
            }
        });
        // Error si no encuentra una entrada asociada al estudiante_id
        if (!asistenciaHoy) {
            return res.status(404).json({
                mensaje: `No se encontró una entrada registrada hoy para el estudiante ${estudiante_id}`
            });
        }

        // Registrar la hora de salida en la BBDD
        asistenciaHoy.hora_salida = horaActual;
        await asistenciaHoy.save();

        res.status(200).json({
            mensaje: `Salida del estudiante ${estudiante_id} registrada con exito`,
            hora_salida: horaActual
        });
}

//VER TODAS LAS ASISTENCIAS
exports.obtenerAsistencia= async (req, res)=>{
    const asistencias = await asistencia.findAll()
    res.status(200).json({
        asistencia: asistencias
    })
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
exports.obtenerAsistenciaEstudiante= async (req, res)=>{
    const id=parseInt(req.params.id);

    const usuario = await asistencia.findByPk(id)

    if (!asistencia){
        return res.status(404).json({ mensaje: 'Asistencia no encontrado'});
    }
    res.json(asistencia)
};

