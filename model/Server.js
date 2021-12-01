const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const conexion = require("../config/conection")

class Server{
    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.middlewares();
        this.conection();
        this.routes();
        
    }

    middlewares = () => {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"))
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }

    conection = async() => {
        await conexion()
    }

    routes = () => {
        this.app.use("/prueba", require("../router/Prueba"));
        this.app.use("/auth", require("../router/Auth.router"));
        this.app.use("/horario", require("../router/Horario.router"));
        this.app.use("/medico", require("../router/Medico.router"));
        this.app.use("/paciente", require("../router/Paciente.router"));
        this.app.use("/reserva", require("../router/Reserva.router"));
        this.app.use("/especialidad", require("../router/Especialidad.router"));
    }

    listen = () => {
        this.app.listen(this.port, () => console.log("Servidor corriendo en puerto ",this.port))
    }

}

module.exports = Server;