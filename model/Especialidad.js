const { Schema, model } = require("mongoose");

const EspecialidadSchema = new Schema({
    des_especialidad: String,
    img: String,
    estado: Boolean
});

module.exports = model('Especialidad', EspecialidadSchema);
