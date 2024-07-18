// const userModel = require("../../user/model/userModel");
// const multer = require("multer");

// // Configure multer for single file upload
// const storage = multer.diskStorage({
//   destination: "images/",
//   filename: (req, file, cb) => {
//     cb(null,file.originalname);
//   },
// });
// const photoUpload = multer({ storage });
// const upload = photoUpload.single("file");

// exports.userRegistration = async (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     } else if (err) {
//       return res.status(500).json({ error: "File upload failed" });
//     }

//     try {
//       if (!req.file) {
//         return res.status(400).json({ error: "No file uploaded" });
//       }

//       const userData = {
//         fullname: req.body.fullname,
//         email: req.body.email,
//         mobile: req.body.mobile,
//         password: req.body.password,
//         photo: req.file.filename,
//       };

//       const user = new userModel(userData);
//       await user.save();

//       return res.status(200).json(user);
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   });
// };

const userModel = require("../../user/model/userModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "images/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const photoUpload = multer({ storage, limits:{ fileSize: 1000000} });
const upload = photoUpload.array("files");
exports.userRegistration = async (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No files uploaded" });
      }

      console.log(req.files, "files", req.files.length);

      const photoFilenames = req.files.map((p) => p.filename);

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
