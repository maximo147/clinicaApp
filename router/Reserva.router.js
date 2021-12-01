const router = require('express').Router();
const { getObjects, getObject, postObject } = require("../controller/Reserva.controller")

router.get("/", getObjects);
router.get("/:_id", getObject);
router.post("/", postObject);

module.exports = router;