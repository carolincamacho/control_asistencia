const express = require ("express");
const usuarioRoutes = require ("./routes/usuarioRoutes");
const tiposRoutes = require ("./routes/tiposRoutes");
const sequelize = require("./config/database");

const app = express()

//para leer el json
app.use(express.json())

//rutas de usuarios
app.use("/usuarios",usuarioRoutes)
app.use("/tipos",tiposRoutes)

const port = 3000;


sequelize.sync().then(()=>
{
    app.listen(port,()=>
{
    console.log(`api escuchando en el puerto ${port}`)
})
}).catch((error)=>{
    console.log(`error al conectarse a la BDB ${error}`)
}
)
