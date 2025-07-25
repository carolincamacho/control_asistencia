const Usuario=require('../models/usuario');

//controlador
exports.obtenerUsuarios=async(req,res)=>
{
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
}
