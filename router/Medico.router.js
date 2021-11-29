const router = require("express").Router();
const { getObjetos, getObjetoForDni,getObjetosForEsp, postObjeto } = require("../controller/Medico.controller")

router.get("/", getObjetos);
//router.get("/:dni=num_dni", getObjetoForDni);
router.get("/:id_especialidad", getObjetosForEsp);
router.post("/", postObjeto);

module.exports = router;