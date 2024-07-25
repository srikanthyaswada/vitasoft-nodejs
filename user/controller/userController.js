const userModel = require("../../user/model/userModel");
const multer = require("multer");
const jwt = require("jsonwebtoken");

const storage = multer.diskStorage({
  destination: "images/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const photoUpload = multer({ storage, limits: { fileSize: 1000000 } });
const upload = photoUpload.array("files");

exports.userRegistration = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: "File upload failed" });
    }

    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No files uploaded" });
      }

      const photoFilenames = req.files.map((file) => file.filename);

      const userData = {
        fullname: req.body.fullname,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
        photos: photoFilenames,
      };

      const user = new userModel(userData);
      await user.save();

      return res.status(200).json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
};

exports.userLogin = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      return res.status(404).json("User not found");
    }

    const JWT_SECRET = "my-secretkey";
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "2h",
    });

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "User login failed" });
  }
};

exports.usersList = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
