const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

// set up server

const app = express();
const PORT = 10004;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());

// connect to mongoDB

mongoose.connect(
    "mongodb://localhost:27017/acphrm",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

// set up routes

app.use("/auth", require("./routers/userRouter"));

function getLoggedMA(){
    let mtu = process.env['USERPROFILE']
    return mtu.slice(mtu.length-7);
}


