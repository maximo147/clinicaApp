const router = require("express").Router();
const { getObjetos, getObjeto,getObjetosForEsp, postObjeto } = require("../controller/Medico.controller")

router.get("/", getObjetos);

router.get("/:_id", getObjeto);

router.get("/especialidad/:id_especialidad", getObjetosForEsp);
router.post("/", postObjeto);

module.exports = router;