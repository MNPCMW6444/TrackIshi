const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  MA: {
      type: Number,
      required: true,
      unique: true
  },
  FirstName: String,
  LastName: String,
  NickName: String,
  CourseNo: Number,
  BirthDate: Date,
  email: String,
  MainPhone: String,
  EmergencyPhone: String,
  AddressCity: String,
  AddressLine: String,
  Rank: String,

  Dereg: String,
  Certifications: [mongoose.Schema.Types.ObjectId],
  Team: String,
  fitnesses: [mongoose.Schema.Types.ObjectId],
  opinions: [mongoose.Schema.Types.ObjectId],

  passwordHash: { type: String, required: true }, // || empty means unregistred || passed means 2021 || hash means 2022 ||
  Role: {type: String, required : true } // || "SCREW" || "DIRECT" || "GENE" || "KEEP" || "ADMIN" ||
});

const User = mongoose.model("user", userSchema);

module.exports = User;
