const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const clienteController = require('../controllers/ClienteControllers');
//Define las tutas
//Rutas para clientes 
router.get('/clientes', clienteController.getClientes);
router.get('/cliente/:id', clienteController.getCliente);
router.post('/creaCliente', clienteController.creaCliente);
router.put('/modCliente/:id', clienteController.modCliente);

router.delete('/delCliente/:id', clienteController.delCliente);


module.exports = router;