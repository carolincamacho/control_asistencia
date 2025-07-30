const { DataTypes }=require('sequelize')
const sequelize = require('../config/database')

const tipos = sequelize.define ('tipos',
{
    tipo_estudiante_id:
    {
        type:DataTypes.INTEGER,
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