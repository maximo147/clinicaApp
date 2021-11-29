const {Schema, model} = require("mongoose");

const HorarioModel = new Schema({
    descripcion: String,
    estado: Boolean
});

module.exports = model("Horario", HorarioModel);