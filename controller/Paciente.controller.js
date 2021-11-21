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
        const { id } = req.params
        console.log(id)
        const registro = await Paciente.findById(id)
        console.log(id)
        if(!registro){
            return res.status(400).json({
                message: "No se encontró elemento"
            })
        }
        return res.status(200).json(registro)
    } catch (error) {

    }
}

const postObjeto = async(req, res) => {
    try {
        // const { num_dni, num_digito, des_nombres, des_apellidos, 
        //     des_genero, fec_nacimiento, correo, clave, celular} = req.body;
        console.log("Parametros: ",req.params)
        console.log("Parametros: ",req.body)
        console.log("Parametros: ",req.query)
        const paciente = new Paciente(req.params);
        const registro = await paciente.save();
        if(!registro){
            return res.status(400).json({
                message: "No se pudo guardar elemento"
            })
        }

        return res.status(200).json(true)


    } catch (error) {
        
    }
}

module.exports = {
    getObjetos,
    getObjeto,
    postObjeto
}