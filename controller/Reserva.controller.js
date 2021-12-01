const Reserva = require("../model/Reserva");

const getObjects = async (req, res) => {
    try {
        const registros = await Reserva.find();
        if (!registros) {
            return res.status(400).json({
                message: "No se pudo cargar horarios"
            })
        }


        return res.status(200).json({
            reservas: registros
        })

    } catch (error) {

    }
}

const getObject = async(req, res) => {
    try {
        const { _id } = req.params;
        const horario = await Reserva.findOne({ _id });
        if (!horario) {
            return res.status(400).json({
                message: "No se pudo cargar reservas"
            })
        }
        return res.status(200).json(horario)

    } catch (error) {

    }
}

const postObject = async (req, res) => {
    try {
        const horario = new Reserva(req.body);
        const registro = await horario.save()
        if (!registro) {
            return res.status(400).json({
                message: "No se pudo guardar horario"
            })
        }

        return res.status(200).json(1)

    } catch (error) {

    }
}

module.exports = {
    getObjects,
    getObject,
    postObject
}