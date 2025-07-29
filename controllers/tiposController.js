const tipos=require('../models/tipos');

//controlador
exports.tipos =async(req,res)=>
{
    const tipos = await tipos.findAll()
    res.json(tipos)
}
