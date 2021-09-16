const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const config = require('./config.js');

const MONGODB_URI = config.mongodburi || 'mongodb://localhost/acphrm';
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/acphrm', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});

let app = express();

app.get('/', (req, res) => {
    var path2 = require('path');
    var userName = process.env['USERPROFILE'].split(path.sep)[2];
    var loginId = path.join("domainName",userName);
    console.log(loginId);
});


app.listen(PORT, () => {
    console.log('Server started on port', PORT);
});


