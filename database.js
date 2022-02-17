
const mongoose = require('mongoose');
const env = require('dotenv');
env.config();
const URI = process.env.URI;

mongoose.connect(URI).then((db) => { console.log("Base de datos conectada") })
    .catch((err) => { console.log("error en conexion de base de datos"); });

