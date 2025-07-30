<<<<<<< HEAD
const Usuario = require('../models/usuario')// importa el modelo del usuario
const express = require('express')//importa el modulo del express
const bcrypt = require('bcrypt')// para el hasting de la contraseña
const jst = require('jsonwebtoken')//para el token jwt

exports.obtenerUsuarios= async(req,res)=>{
    try{
        const usuarios= await Usuario.findAll();
        return res.status(200).json({usuarios:usuarios})
    }catch(error){
        console.log("error al ingresar a la ruta", error)
    }

}


//controlador para crear un usuario
exports.ingresarUsuario = async (req, res) => {
    try {
        // busca el usuario por email
        const usuario = await Usuario.findOne({ where: { email: req.body.email } });
=======
const Usuario = require('../models/Usuario');// Importa el modelo de Usuario
const express = require('express'); // Importa el módulo de Express
const bcrypt = require('bcrypt'); // Importa bcrypt para el hash de contraseñas
const jst = require('jsonwebtoken'); // Importa jsonwebtoken para la autenticación



// Controlador para ingresar un usuario
exports.ingresarUsuario = async (req, res) => {
    try {
        // busca el usuario por email
        const usuario = await Usuario.findOne({ where: { email: req.body.email } });// busca el usuario por email
>>>>>>> main
        // si el usuario no existe, retorna un error
        if (!usuario) {
            return res.status(404).json({mensaje: 'Usuario no encontrado'});
        }
        // compara la contraseña ingresada con la almacenada en la base de datos
<<<<<<< HEAD
        const contraseñaValida = bcrypt.compareSync(req.body.password, usuario.password);
=======
        const contraseñaValida = bcrypt.compareSync(req.body.password, usuario.password);// compara la contraseña ingresada con la almacenada en la base de datos
>>>>>>> main
        // si la contraseña es invalida, retorna un error
        if (!contraseñaValida) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }
        // si la contraseña es valida, genera un token JWT
<<<<<<< HEAD
        const token = jst.sign({ id: usuario.id, email: usuario.email },process.env.token ,{ expiresIn: '1h' }); // 'secretKey' debe ser una clave secreta segura y no debe ser expuesta en el código fuente
        // retorna el token y el usuario
        res.status(200).json({ mensaje: 'Usuario ingresado correctamente', usuario, token });
=======
        const token = jst.sign({ id: usuario.id, email: usuario.email }, process.env.secretKey,{ expiresIn: '1' }); // 'secretKey' debe ser una clave secreta segura y no debe ser expuesta en el código fuente
        // retorna el token y el usuario
        res.status(200).json({ mensaje: 'Usuario ingresado correctamente', usuario, token });// retorna el token y el usuario
>>>>>>> main

    }
    catch (error) {
        res.status(500).json({ mensaje: 'Error al ingresar usuario', error: error.message });
    }
    
}




//controlador para registrar un usuario
exports.registrarUsuario = async (req, res) => {
    try {
        // Hashea la contraseña con bcrypt
        let password = bcrypt.hashSync(req.body.password, 10);
        // Crea un nuevo usuario con los datos proporcionados en el cuerpo de la solicitud
        const usuario = await Usuario.create({
            nombre: req.body.nombre,
            email: req.body.email,
<<<<<<< HEAD
            password: password
=======
            password: password,
            tipo_estudiante_id: req.body.tipo_estudiante_id,
            estudiante_id: req.body.estudiante_id
>>>>>>> main
        });
        res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar usuario', error: error.message });
    }
}
<<<<<<< HEAD
=======


//controlador
exports.obtenerUsuarios=async(req,res)=>
{
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
}
>>>>>>> main
