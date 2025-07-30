const express = require ("express");
const usuarioRoutes = require ("./routes/usuarioRoutes");
const sequelize = require("./config/database");
require("dotenv").config();
const app = express()

//para leer el json
app.use(express.json())

//rutas de usuarios
app.use("/usuario",usuarioRoutes)
//const port = 3000;
const port = process.env.PORT;
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

// app.use((req, res, next) => {
//       const token = process.env.token;
//       req.headers.authorization = `Bearer ${token}`;
//       next();
// });
