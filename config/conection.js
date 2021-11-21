const mongoose = require("mongoose");

const conexion = async() => {
    try {
        const conectado = await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser: true,
            useUnifiedTopology: true });
        if(!conectado){
            console.log("Error al conectar a BD")
        }

        console.log("Conectado a MongoBD")
        return conectado;
    } catch (error) {
        console.log("No se pudo conectar a BD error: ", error)
    }
}

module.exports = conexion;