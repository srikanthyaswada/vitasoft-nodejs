const express = require("express");
const mongoose = require("mongoose");
const adminRoute = require("./admin/routes/vitaRoute");
const userRoute = require("./user/routes/userRoute");
const env = require("dotenv");
const app = express();

env.config();
app.use(express.json());

// port = 3000;

const cors = require("cors"); // cross origin resource sharing
app.use(cors());

app.listen(process.env.port, () => {
  console.log("listening on port", process.env.port);
});

// const mongoDB_Url = "mongodb://localhost:27017/vitasoft";
mongoose
  .connect(process.env.db_Url)
  .then(console.log("DB Connected"))
  .catch((err) => {
    console.log(err);
  });

app.use("/admin", adminRoute);
app.use("/user", userRoute);
