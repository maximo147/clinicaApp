const Horario = require("../model/Horario");

const getObjects = async (req, res) => {
    try {
        const horarios = await Horario.find();
        if (!horarios) {
            return res.status(400).json({
                message: "No se pudo cargar horarios"
            })
        }

        return res.status(200).json({
            horarios: horarios
        })

    } catch (error) {

    }
}

const getObject = async(req, res) => {
    try {
        const { _id } = req.params;
        const horario = await Horario.findOne({ _id });
        if (!horario) {
            return res.status(400).json({
                message: "No se pudo cargar horarios"
            })
        }
        return res.status(200).json(horario)

    } catch (error) {

    }
}

const postObject = async (req, res) => {
    try {
        const horario = new Horario(req.body);
        const registro = await horario.save()
        if (!registro) {
            return res.status(400).json({
                message: "No se pudo guardar horario"
            })
        }

        return res.status(200).json({
            message: "Guardado Correctamente"
        })

    } catch (error) {

    }
}

module.exports = {
    getObjects,
    getObject,
    postObject
}