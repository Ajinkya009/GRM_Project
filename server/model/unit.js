var mongoose = require('mongoose');

var unitSchema = new mongoose.Schema({
	unitNumber: Number,
	title: String,
    topic: Number,
    subtopic: Number,
    chapter: Number,
    paper: Number, //1: 1, 2: 2
    subject: Number, //1: Physics, 2:Chemistry, 3: Math, 4: Biology
    standard: Number //11: for 11th, 12: for 12th
});

module.exports = mongoose.model('unit',unitSchema);