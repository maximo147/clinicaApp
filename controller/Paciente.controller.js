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
        const registro = await Paciente.findOne({ num_dni })
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
        const estado = true;
        const { num_dni, num_digito, des_nombres, des_apellidos,
            des_genero, fec_nacimiento, correo, clave, celular } = req.body;

        const dniExiste = await Paciente.findOne({ num_dni });
        if (dniExiste != null) {
            return res.status(400).json("DNI ya existe")
        }

        const paciente = new Paciente({
            num_dni, num_digito, des_nombres, des_apellidos,
            des_genero, fec_nacimiento, correo, clave, celular, estado
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

const putDatos = async (req, res) => {
    try {
        const { num_dni } = req.params;
        const { des_correo, des_celular } = req.body;
        const registro = await Paciente.findOne({ num_dni });
        if(!registro){
            return res.status(400).json("No existe el paciente");
        }
        const edit = await Paciente.findOneAndUpdate({num_dni}, {des_correo, des_celular });
        if(!edit){
            return res.status(400).json("No ese pudo editar paciente");
        }
        return res.status(200).json(1);
    } catch (error) {

    }
}

const putPass = async (req, res) => {
    try {
        const { num_dni } = req.params;
        const { des_clave, des_nuevo_clave } = req.body;
        const registro = await Paciente.findOne({ num_dni });

        if(!registro){
            return res.status(400).json("No existe el paciente");
        }

        if(registro.des_clave !== des_clave){
            return res.status(400).json("La contraseña anterior no coincide");
        }

        const edit = await Paciente.findOneAndUpdate({num_dni}, {des_clave: des_nuevo_clave});
        if(!edit){
            return res.status(400).json("No ese pudo editar contraseña");
        }
        return res.status(200).json(1);
    } catch (error) {

    }
}


module.exports = {
    getObjetos,
    getObjeto,
    postObjeto,
    putDatos,
    putPass
}