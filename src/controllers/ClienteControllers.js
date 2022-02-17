const clienteModel = require('../model/Cliente');
const clienteController = {}

clienteController.getClientes = async (req, res) => {
    const clientes = await clienteModel.find();
    console.log(clientes);
    res.json(clientes);
};

clienteController.getCliente = async (req, res) => {
    const idcliente = req.params.id;
    const cliente = await clienteModel.findById(idcliente);
    console.log(cliente);
    res.json(cliente);
};

clienteController.creaCliente = async (req, res) => {
    const nuevoCliente = new clienteModel(req.body);
    await nuevoCliente.save();
    res.send({ message: "ciente creado" });
};

clienteController.modCliente = async (req, res) => {
    const id = req.params.id;
    const modcliente = await clienteModel.findByIdAndUpdate(id, req.body);
    res.json({ "mensaje": "en el modifica cliente  desde router" + req.params.id + " - " + modcliente });
};

clienteController.delCliente = async (req, res) => {
    const id = req.params.id;
    const dCliente = await clienteModel.findByIdAndDelete(id);
    res.json({ "mensaje": "en el elimina cliente  desde controlador" + req.params.id + " - " + dCliente });

};




module.exports = clienteController;