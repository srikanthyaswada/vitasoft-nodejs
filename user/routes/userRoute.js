const express = require("express");
const router = express.Router();
const controller = require("../../user/controller/userController");

router.post("/register", controller.userRegistration);
// router.get('/users', controller.usersList)
// router.get("/login", controller.userLogin);
// router.get("/profile/:id", controller.userProfile);
// router.put("/updateUser/:id", controller.updateUser);
// router.delete("/deleteUser/:id", controller.deleteUser);
module.exports = router;
