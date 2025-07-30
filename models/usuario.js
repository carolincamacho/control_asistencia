const { DataTypes }=require('sequelize')
const sequelize = require('../config/database')

const Usuario = sequelize.define ('Usuario',
{
    tipo_estudiante_id:
    {
        type:DataTypes.STRING,
        allowNull:false
    },
    estudiante_id:
    {
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    },
    nombre:
    {
        type:DataTypes.STRING,
        allowNull:false
    },
    email:
    {
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:
    {
        type:DataTypes.STRING,
        allowNull:false
    },
    rol:
    {
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=Usuario;