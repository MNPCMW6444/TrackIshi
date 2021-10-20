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

  Dereg: Number,
  Certifications: [mongoose.Schema.Types.ObjectId],
  Team: String,
  fitnesses: [mongoose.Schema.Types.ObjectId],

  passwordHash: { type: String, required: true }, // || empty means unregistred || passed means 2021 || hash means 2022 ||
  Role: {type: String, required : true } // || "SCREW" || "DIRECT" || "AUTHCO" || "PAKMATS" || "SCHOOL" || "MALAM" || "ADMIN" || => || SimpleCrewMember || DirectFluentCommander|| AuthorizerCommander || Pakmatsit || SchoolCommander || FitnessContributingPhase || AppAdministrator ||
});

const User = mongoose.model("user", userSchema);

module.exports = User;
