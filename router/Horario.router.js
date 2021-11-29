const router = require('express').Router();
const {getObjects, postObject} = require("../controller/Horario.controller")

router.get("/", getObjects);
router.post("/", postObject);

module.exports = router;