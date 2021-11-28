const Especialidad = require("../model/Especialidad")

const getObjetos = async (req, res) => {
    try {
        const registros = await Especialidad.find();
        return res.status(200).json({
            especialidades: registros
        })
    } catch (error) {

    }
}

const getObjeto = async (req, res) => {
    try {
        const { id } = req.params
        const registro = await Especialidad.findById(id);
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
        const { des_nombre, des_descripcion } = req.body;
        const value = true;
        const objeto = new Especialidad({ des_nombre, des_descripcion, value });
        const registro = await objeto.save();
        if(!registro){
            return res.status(400).json({
                message: "No se pudo guardar elemento"
            })
        }

        return res.status(201).json(1)


    } catch (error) {
        
    }
}

module.exports = {
    getObjetos,
    getObjeto,
    postObjeto
}