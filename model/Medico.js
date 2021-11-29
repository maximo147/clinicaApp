const {Schema, model} = require("mongoose");

const MedicoSchema = new Schema({
    id_especialidad: {type: Schema.Types.ObjectId, ref: "Especialidade"},
    num_dni: String,
    des_nombres: String,
    des_apellidos: String,
    des_correo: String,
    des_genero: String,
    num_colegio: String,
    estado: Boolean
})

module.exports = model('Medico', MedicoSchema);