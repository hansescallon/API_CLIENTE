const usuarioModel = require('../model/Usuario');
const usuarioController = {}

usuarioController.getUsuarios = async (req, res) => {
    const usuarios = await usuarioModel.find();
    console.log(usuarios);
    res.json(usuarios);
};

usuarioController.getUsuario = async (req, res) => {
    const idUsuario = req.params.id;
    const usuario = await usuarioModel.findById(idUsuario);
    console.log(usuario);
    res.json(usuario);
};

usuarioController.creaUsuario = async (req, res) => {
    const nuevoUsuario = new usuarioModel(req.body);
    await nuevoUsuario.save();
    res.send({ message: "usuario creado" });
};

usuarioController.modUsuario = async (req, res) => {
    const id = req.params.id;
    const modUsuario = await usuarioModel.findByIdAndUpdate(id, req.body);
    res.json({ "mensaje": "en el modifica usuario  desde router" + req.params.id + " - " + modUsuario });
};

usuarioController.delUsuario = async (req, res) => {
    const id = req.params.id;
    const dUsuario = await usuarioMdel.findByIdAndDelete(id);
    res.json({ "mensaje": "en el elimina usuario  desde controlador" + req.params.id + " - " + dUsuario });

};

module.exports = usuarioController;