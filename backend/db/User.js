const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
   fastName: String,
    lastName: String,
    email: String,
    phone: Number,
    date: String,
    time: String
});

module.exports = mongoose.model('users', Schema);