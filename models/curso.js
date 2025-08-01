const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const curso = sequelize.define('curso',{
    codigo:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    nombre_curso:{
        type:DataTypes.STRING,
        allowNull:false,
        },
    
    jornada:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    grupo:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})

module.exports = curso;