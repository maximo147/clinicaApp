const Paciente = require("../model/Paciente")

const getObjetos = async (req, res) => {
    try {
        const registros = await Paciente.find();
        return res.status(200).json(registros)
    } catch (error) {

    }
}

const getObjeto = async (req, res) => {
    try {
        const { num_dni } = req.params
        const registro = await Paciente.findOne({num_dni})
        console.log(registro);
        if (registro == null) {
            return res.status(400).json("No se encontró elemento")
        }
        return res.status(200).json(registro)
    } catch (error) {

    }
}

const postObjeto = async (req, res) => {
    try {
        const { num_dni, num_digito, des_nombres, des_apellidos,
            des_genero, fec_nacimiento, correo, clave, celular } = req.body;

        const dniExiste = await Paciente.findOne({ num_dni });
        if (dniExiste != null) {
            return res.status(400).json("DNI ya existe")
        }

        const paciente = new Paciente(req.body);
        const registro = await paciente.save();
        if (!registro) {
            return res.status(400).json({
                message: "No se pudo guardar elemento"
            })
        }

        return res.status(200).json(1)


    } catch (error) {

    }
}

module.exports = {
    getObjetos,
    getObjeto,
    postObjeto
}