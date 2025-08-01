const { DataTypes, Model }=require('sequelize')
const sequelize = require('../config/database');
const tipos = require('./tipos');

const Usuario = sequelize.define ('usuario',
{
    tipo_estudiante_id:
    {
        type:DataTypes.STRING(2),
        allowNull:false,
        primaryKey:true,
        references:
        {
            model: tipos,
            key:"tipo_estudiante_id",
        },
    },
    estudiante_id:
    {
        type:DataTypes.STRING,
        primaryKey:true,
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
    },
    estado:
    {
        type:DataTypes.STRING,
        defaultValue: "ACTIVO",
        allowNull:false
    }
})

module.exports=Usuario;