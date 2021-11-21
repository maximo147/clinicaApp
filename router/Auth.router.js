const router = require("express").Router();
const { postAuth } = require("../controller/Auth.controller");

router.post("/", postAuth);

module.exports = router;