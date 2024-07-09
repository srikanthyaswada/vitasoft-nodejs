const express = require("express");
const router = express.Router();
const controller = require('../controllers/vitaControllers')

router.post("/adduser", controller.register);

module.exports = router;
