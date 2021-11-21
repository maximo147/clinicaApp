const router = require("express").Router();
const { getObjetos, getObjeto, postObjeto } = require("../controller/Paciente.controller")

router.get("/", getObjetos);
router.get("/:id", getObjeto);
router.post("/", postObjeto);

module.exports = router;