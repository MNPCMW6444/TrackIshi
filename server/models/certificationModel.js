const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
    CrewM: {type: mongoose.Schema.Types.ObjectId, required: true},

    cerSinceDate: {type: Date, required: true},

    Filler: {type: mongoose.Schema.Types.ObjectId, required: true},
    Exammer: {type: mongoose.Schema.Types.ObjectId, required: true},

    Grade: {type: Number, required: true},

    Name: {type: Number, required: true}
});

const Certification = mongoose.model("certification", certificationSchema);

module.exports = Certification;
