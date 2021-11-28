const { Schema, model } = require("mongoose");

const EspecialidadSchema = new Schema({
    des_nombre: String,
    des_descripcion: String,
    estado: Boolean
});

module.exports = model('Especialidade', EspecialidadSchema);
