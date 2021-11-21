const {Schema, model} = require("mongoose");

const Prueba = new Schema({
    nombre: String,
    edad: Number
});

module.exports = model('Prueba', Prueba);