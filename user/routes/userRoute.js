const express = require("express");
const router = express.Router();
const controller = require("../../user/controller/userController");
const verifyToken = require("../../jwt/verifyToken");
const cors = require("cors");

let corsOptions = {
  origin: ["http://localhost:3000"],
};

router.post("/register", cors(corsOptions), controller.userRegistration);
router.post("/login", cors(corsOptions), controller.userLogin);
router.get("/users", cors(corsOptions), verifyToken, controller.usersList);

module.exports = router;
