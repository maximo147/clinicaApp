const Paciente = require("../model/Paciente");

const postAuth = async(req, res) => {
    try {
        const {num_dni, des_clave} = req.body;
        const paciente = await Paciente.findOne({num_dni});
        if(!paciente){
            return res.status(400).json(0);
        }else{
            if(paciente.des_clave === des_clave){
                return res.status(200).json(1)
            }else{
                return res.status(400).json(0);
            }
        }
    } catch (error) {
        
    }
}

module.exports = {
    postAuth
}