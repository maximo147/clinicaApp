const {Schema, model} = require("mongoose");

const MedicoSchema = new Schema({
    id_especialidad: Number,
    des_dni: String,
    des_nombres: String,
    des_apellidos: String,
    des_correo: String,
    des_genero: String,
    estado: Boolean
})

module.exports = model('Medico', MedicoSchema);