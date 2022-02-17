const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioControllers');
//Define las tutas
//Rutas para usuarios 
router.get('/usuarios', usuarioController.getUsuarios);
router.get('/usuario/:id', usuarioController.getUsuario);
router.post('/creaUsuario', usuarioController.creaUsuario);
router.put('/modUsuario/:id', usuarioController.modUsuario);
router.delete('/delUsuario/:id', usuarioController.delUsuario);


module.exports = router;