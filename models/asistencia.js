const {DataTypes} = require('sequelize');

const asistencia = sequelize.define('asistencia',{
    estudiante_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'usuario',
            key: 'estudiante_id'
        },
    },

    fecha:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },

    hora_entrada:{
        type:DataTypes.TIME,
        allowNull:false,
    },

    hora_salida:{
        type:DataTypes.TIME,
        allowNull:true,
    }
})

module.exports = Asistencia;