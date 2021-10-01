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

  passwordHash: { type: String, required: true },
  Role: {type: String, required : true }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
