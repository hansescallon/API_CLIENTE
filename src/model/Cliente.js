const { Schema, model } = require('mongoose');

const clienteSchema = new Schema(
    {
        cedula: { type: String, required: true },
        nombres: { type: String, required: true },
        apellidos: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model("Cliente", clienteSchema);