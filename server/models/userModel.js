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
  Email: String,
  MainPhone: String,
  EmergencyPhone: String,
  AddressCity: String,
  AddressLine: String,
  Rank: String,
  Maslool: String,
  SoogHatsava: String,
  Unit: String,
  passwordHash: { type: String, required: true }, // || empty means unregistred || passed means 2021 || hash means 2022 ||
  Role: {type: String, required : true }, // || "SCREW" || "DIRECT" || "AUTHCO" || "PAKMATS" || "SCHOOL" || "MALAM" || "ADMIN" || => || SimpleCrewMember || DirectFluentCommander|| AuthorizerCommander || Pakmatsit || SchoolCommander || FitnessContributingPhase || AppAdministrator ||
  MyComm: mongoose.Schema.Types.ObjectId,
  MyAuth: mongoose.Schema.Types.ObjectId
});

const User = mongoose.model("user", userSchema);

module.exports = User;
