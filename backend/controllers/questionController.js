const Question = require('../models/Question');

// Add a new question
exports.addQuestion = async (req, res) => {
    try {
        const { questionText, solutionLink, description, userCode } = req.body;

        if (!questionText || !solutionLink || !description) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newQuestion = await Question.create({
            questionText,
            solutionLink,
            description,
            userCode
        });

        res.status(201).json(newQuestion);
    } catch (error) {
        console.error('Error adding question:', error);
        res.status(500).json({ message: 'Error adding question' });
    }
};

// Get all questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find().sort({ createdAt: -1 });
        res.status(200).json(questions);
    } catch (error) {
        console.error('Error retrieving questions:', error);
        res.status(500).json({ message: 'Error retrieving questions' });
    }
};

// Get a question by ID
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        console.error('Error retrieving question:', error);
        res.status(500).json({ message: 'Error retrieving question' });
    }
};

// Update a question by ID
exports.updateQuestion = async (req, res) => {
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json(updatedQuestion);
    } catch (error) {
        console.error('Error updating question:', error);
        res.status(500).json({ message: 'Error updating question' });
    }
};

// Delete a question by ID
exports.deleteQuestion = async (req, res) => {
    try {
        const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
        console.error('Error deleting question:', error);
        res.status(500).json({ message: 'Error deleting question' });
    }
};
