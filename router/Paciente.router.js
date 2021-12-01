const router = require("express").Router();
const { getObjetos, getObjeto, postObjeto, putDatos, putPass } = require("../controller/Paciente.controller")

router.get("/", getObjetos);
router.get("/:num_dni", getObjeto);
router.post("/editarDatos/:num_dni", putDatos);
router.post("/editarPass/:num_dni", putPass);
router.post("/", postObjeto);

module.exports = router;