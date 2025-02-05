const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true,
    },
    solutionLink: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    userCode: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;