import React, { useState } from 'react';
import '../styles/AddQuestion.css';

const AddQuestion = () => {
    const [questionText, setQuestionText] = useState('');
    const [solutionLink, setSolutionLink] = useState('');
    const [description, setDescription] = useState('');
    const [userCode, setUserCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newQuestion = {
            questionText,
            solutionLink,
            description,
            userCode,
        };

        try {
            const response = await fetch('http://localhost:5000/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newQuestion),
            });

            if (response.ok) {
                // Reset form fields
                setQuestionText('');
                setSolutionLink('');
                setDescription('');
                setUserCode('');
                alert('Question added successfully!');
            } else {
                alert('Failed to add question.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the question.');
        }
    };

    return (
        <div className="add-question">
            <h2>Add a New Question</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Question Text:</label>
                    <input
                        type="text"
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Solution Link:</label>
                    <input
                        type="url"
                        value={solutionLink}
                        onChange={(e) => setSolutionLink(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>User Code:</label>
                    <textarea
                        value={userCode}
                        onChange={(e) => setUserCode(e.target.value)}
                    />
                </div>
                <button type="submit">Add Question</button>
            </form>
        </div>
    );
};

export default AddQuestion;