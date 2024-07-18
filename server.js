const express = require("express");
const mongoose = require("mongoose");
const adminRoute = require("./admin/routes/vitaRoute");
const userRoute = require("./user/routes/userRoute");

const app = express();

app.use(express.json());

port = 3000;

app.listen(port, () => {
  console.log("listening on port", port);
});

const mongoDB_Url = "mongodb://localhost:27017/vitasoft";
mongoose
  .connect(mongoDB_Url)
  .then(console.log("DB Connected"))
  .catch((err) => {
    console.log(err);
  });

app.use("/admin", adminRoute);
app.use("/user", userRoute);
