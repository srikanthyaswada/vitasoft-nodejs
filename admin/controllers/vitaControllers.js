const adminModel = require("../../admin/models/vitaModel");

exports.addAdmin = async (req, res) => {
  try {
    const admin = new adminModel(req.body);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add admin" });
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const admin = await adminModel.find();
    res.status(201).json(admin);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "failed to get admin data" });
  }
};
exports.getProfile = async (req, res) => {
  try {
    const profile = await adminModel.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ error: "admin not found" });
    }
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch admin profile" });
  }
};

exports.adminLogin = async (req, res) => {
  try {
    const admin = await adminModel.findOne(req.body);
    res.status(201).json(admin);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Admin login Failed" });
  }
};
exports.updateProfile = async (req, res) => {
  try {
    const updateadmin = await adminModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(updateadmin);
  } catch (error) {
    res.status(500).json({ error: "failed to update admin" });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const deleteadmin = await adminModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteadmin);
  } catch (error) {
    res.status(500).json({ error: "failed to delete admin" });
  }
};
