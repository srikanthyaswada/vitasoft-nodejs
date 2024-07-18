// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     fullname: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     mobile: {
//       type: Number,
//       required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//       },
//     photo: {
//         type: String,
//         required: true,
//       },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("user", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photos: {
    type: [], 
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
