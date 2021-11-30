const {Schema, model} = require("mongoose")

const ReservaSchema = new Schema({
    id_medico: {type: Schema.Types.ObjectId, ref:"Medico"},
    id_horario: {type: Schema.Types.ObjectId, ref:"Horario"},
    fec_reserva: Date,
    estado: Boolean
})