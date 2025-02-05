const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Routes for question operations
router.get('/', questionController.getAllQuestions);
router.post('/', questionController.addQuestion);
router.get('/:id', questionController.getQuestionById);
router.put('/:id', questionController.updateQuestion);
router.delete('/:id', questionController.deleteQuestion);

module.exports = router;
