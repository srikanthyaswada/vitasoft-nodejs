const adminModel = require('../controllers/vitaControllers')


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

  