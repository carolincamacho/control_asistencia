const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');
const usuario=require('./usuario');
const curso=require('./curso');

const asistencia = sequelize.define('asistencia',
{
    tipo_estudiante_id:
    {
        type:DataTypes.STRING(2),
        allowNull:false,
        foreignKey:
        {
            model:usuario,
            key: 'tipo_estudiante_id'
        },
    },
    estudiante_id:
    {
        type:DataTypes.STRING,
        allowNull:false,
        foreignKey:
        {
            model:usuario,
            key: 'estudiante_id'
        },
    },

    fecha:
    {
        type:DataTypes.DATEONLY,
        allowNull:false,
    },

    hora_entrada:
    {
        type:DataTypes.TIME,
        allowNull:false,
    },

    hora_salida:
    {
        type:DataTypes.TIME,
        allowNull:true,
    },
    curso:
    {
        type:DataTypes.STRING,
        allowNull:false,
        foreignKey:
        {
            model: curso,
            key:'codigo'
        }
    }
})

usuario.hasMany(asistencia, { foreignKey: 'tipo_estudiante_id' });
asistencia.belongsTo(usuario, { foreignKey: 'tipo_estudiante_id' });
usuario.hasMany(asistencia, { foreignKey: 'estudiante_id' });
asistencia.belongsTo(usuario, { foreignKey: 'estudiante_id' });

module.exports = asistencia;