const router = require("express").Router();
const { getObjetos, getObjeto, postObjeto } = require("../controller/Paciente.controller")

router.get("/", getObjetos);
router.get("/:num_dni", getObjeto);
router.post("/", postObjeto);

module.exports = router;