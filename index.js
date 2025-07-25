const express = require ("express");
const usuarioRoutes = require ("./routes/usuarioRoutes")
const app = express()

//para leer el json
app.use(express.json())

//rutas de usuarios
app.use("/usuarios",usuarioRoutes)
const port = 3000;

app.listen(port,()=>
{
    console.log(`api escuchando en el puerto ${port}`)
})


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
})