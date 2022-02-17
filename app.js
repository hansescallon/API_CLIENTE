const db = require('./database');
const express = require('express');
const morgan = require('morgan');
const env = require('dotenv');
env.config();
const app = express();
app.use(express.json());


const port = process.env.PORT;
app.use(morgan("dev"));
//rutas
app.use('/credifacil', require('./src/routers/ClienteRouter'));
app.use('/credifacil', require('./src/routers/UsuarioRouter'));

app.listen(port, (req, res) => {
    console.log('escuchando en el puerto:' + port);
})

