const { Schema, model } = require("mongoose");

const EspecialidadSchema = new Schema({
    des_nombre: String,
    des_especialidad: String,
    estado: Boolean
});

module.exports = model('Especialidade', EspecialidadSchema);
