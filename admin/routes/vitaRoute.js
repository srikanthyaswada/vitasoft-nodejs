const express = require("express");
const router = express.Router();
const controller = require("../../admin/controllers/vitaControllers");

router.post("/addAdmin", controller.addAdmin);
router.get("/getAdmin", controller.getAdmin);
router.get("/profile/:id", controller.getProfile);
router.post("/adminLogin", controller.adminLogin);
router.put("/updateProfile/:id", controller.updateProfile);
router.delete("/deleteAdmin/:id", controller.deleteAdmin);
module.exports = router;
