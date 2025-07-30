const { DataTypes, Model }=require('sequelize')
const sequelize = require('../config/database')

const tipos = sequelize.define ('tipos',
{
    tipo_estudiante_id:
    {
        type:DataTypes.STRING(2),
        unique:true,
        allowNull:false
    },
    descripcion:
    {
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    }
})

module.exports=tipos;