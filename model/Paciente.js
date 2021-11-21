const {Schema, model} = require("mongoose");

const PacienteSchema = new Schema({
    num_dni: {
        type: String
    },
    num_digito: {
        type: String
    },
    des_nombres: {
        type: String
    },
    des_apellidos: {
        type: String
    },
    des_genero: {
        type: String
    }, 
    fec_nacimiento: {
        type: Date
    },
    des_correo: {
        type: String
    },
    des_clave: {
        type: String
    },
    des_celular: {
        type: String
    },
    estado: {
        type: Boolean
    }

})

module.exports = model('Paciente', PacienteSchema);