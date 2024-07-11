const express = require("express");
const router = express.Router();
const controller = require("../controllers/vitaControllers");

router.post("/adduser", controller.register);
router.get("/getusers", controller.getUsers);
router.get("/profile/:id", controller.getProfile)

module.exports = router;
