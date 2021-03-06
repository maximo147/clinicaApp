const Medico = require("../model/Medico")

const getObjetos = async (req, res) => {
    try {
        const registros = await Medico.find();
        return res.status(200).json({
            medicos: registros
        })
    } catch (error) {

    }
}

const getObjeto = async (req, res) => {
    try {
        const { _id } = req.params
        const registro = await Medico.findOne({ _id })
        if (registro == null) {
            return res.status(400).json("No se encontrĂ³ elemento")
        }
        return res.status(200).json(registro)
    } catch (error) {

    }
}

const getObjetosForEsp = async (req, res) => {
    try {
        const { id_especialidad } = req.params
        const registro = await Medico.find({
           id_especialidad 
        })
        if (registro == null) {
            return res.status(400).json("No se encontrĂ³ elemento")
        }
        return res.status(200).json({
            medicos: registro 
        })
    } catch (error) {

    }
}

const postObjeto = async (req, res) => {
    try {
        const estado = true;
        const {
            id_especialidad,
            num_dni,
            des_nombres,
            des_apellidos,
            des_correo,
            des_genero,
            num_colegio
        } = req.body;


        const dniExiste = await Medico.findOne({ num_dni });
        if (dniExiste != null) {
            return res.status(400).json("DNI ya existe")
        }


        const paciente = new Medico({
            id_especialidad,
            num_dni,
            des_nombres,
            des_apellidos,
            des_correo,
            des_genero,
            num_colegio, estado
        });
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
    getObjetosForEsp,
    postObjeto
}