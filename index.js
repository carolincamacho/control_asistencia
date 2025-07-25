const express = require ("express");
const usuarioRoutes = require ("./routes/usuarioRoutes")

const app = express()

//para leer el json
app.use(express.json())

//rutas de usuarios
app.use("/usuario",usuarioRoutes)
const port = 3000;

app.listen(port,()=>
{
    console.log(`api escuchando en el puerto ${port}`)
})

