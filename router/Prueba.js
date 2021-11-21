const router = require("express").Router();
const Prueba = require("../model/Prueba");

router.get("/", (req, res) => {
    res.json("holaaaa");
})

router.post("/", async(req, res) => {
    const { nombre, edad } = req.body;
    const prueba = new Prueba({nombre, edad});
    const registro  = await prueba.save();
    if(!registro){
        return res.json("No se pudo guardar");
    }
    return res.json("Guardado");
})

module.exports = router;