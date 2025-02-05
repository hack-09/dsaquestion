import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
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
            const response = await fetch(`${process.env.API_CALL}/api/questions`, {
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
        <Container className="add-question-container">
            <h2 className="text-center mb-4">Add a New Question</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="questionText">
                            <Form.Label>Question Text:</Form.Label>
                            <Form.Control
                                type="text"
                                value={questionText}
                                onChange={(e) => setQuestionText(e.target.value)}
                                required
                                placeholder="Enter the question text"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="solutionLink">
                            <Form.Label>Solution Link:</Form.Label>
                            <Form.Control
                                type="url"
                                value={solutionLink}
                                onChange={(e) => setSolutionLink(e.target.value)}
                                required
                                placeholder="Enter solution link"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="description">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                rows={3}
                                placeholder="Provide a brief description"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="userCode">
                            <Form.Label>User Code:</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={userCode}
                                onChange={(e) => setUserCode(e.target.value)}
                                rows={3}
                                placeholder="Optional: Add solution code"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" className="w-100">
                    Add Question
                </Button>
            </Form>
        </Container>
    );
};

export default AddQuestion;
