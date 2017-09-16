var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
    questionNumber: Number,
    question:String, 
    choices: [String], // only for mcqs i.e. type=1
    answer: String,
    level: Number, //only for mcqs i.e. type=1
    type: Number, //1:mcq, 2:v.s.a, 3:s.a.1, 4:s.a.2, 5:l.a.
    board: Number, //1: state, 2: central
    subtopic: Number,
    topic: Number,
    chapter: Number,
    paper: Number, //1: 1, 2: 2
    subject: Number, //1: Physics, 2:Chemistry, 3: Math, 4: Biology
    standard: Number //11: for 11th, 12: for 12th
});

module.exports = mongoose.model('question',questionSchema);