const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const usuario=require('./usuario');

const asistencia = sequelize.define('asistencia',{
    estudiante_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:usuario,
            key: 'estudiante_id'
        },
    },

    fecha:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    hora_entrada:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    hora_salida:{
        type:DataTypes.TIME,
        allowNull:true,
    }
})

module.exports = asistencia;