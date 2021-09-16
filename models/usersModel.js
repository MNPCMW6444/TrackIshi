const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ma: {
        type: String,
        unique: true,
        required: true
    },
});

const User = mongoose.model('User', UserSchema)

module.exports = User;
