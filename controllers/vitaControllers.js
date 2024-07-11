const adminModel = require("../models/vitaModel");

exports.register = async (req, res) => {
  try {
    const user = new adminModel(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add admin" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const userlist = await adminModel.find();
    res.status(201).json(userlist);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "failed to get user data" });
  }
};
exports.getProfile = async (req, res) => {
  try {
    const profile = await adminModel.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ error: "user not found" });
    }
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
};