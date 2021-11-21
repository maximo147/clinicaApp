const { Schema, model } = require("mongoose");

const EspecialidadSchema = new Schema({
    des_especialidad: String,
    des_descripcion: String,
    estado: Boolean
});

module.exports = model('Especialidad', EspecialidadSchema);
