import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './SearchBar';
import '../styles/QuestionList.css';
import { Container, Row, Col, Button, Alert, ListGroup } from 'react-bootstrap';

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`${process.env.API_CALL}/api/questions`);
                setQuestions(response.data || []);
            } catch (error) {
                console.error('Error fetching questions:', error);
                setError('Failed to fetch questions. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchQuestions();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredQuestions = Array.isArray(questions)
        ? questions.filter(question =>
            question.questionText?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    return (
        <Container fluid className="py-4">
            <h1 className="text-center mb-4">Question List</h1>
            <Row className="justify-content-between align-items-center mb-3">
                <Col xs={12} md={8}>
                    <SearchBar onSearch={handleSearch} />
                </Col>
                <Col xs={12} md={4} className="text-md-end mt-2 mt-md-0">
                    <Link to="/add">
                        <Button variant="primary">Add New Question</Button>
                    </Link>
                </Col>
            </Row>
            {loading ? (
                <Alert variant="info">Loading questions...</Alert>
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : !filteredQuestions.length ? (
                <Alert variant="warning">No questions found.</Alert>
            ) : (
                <ListGroup className="question-list">
                    {filteredQuestions.map(question => (
                        <ListGroup.Item key={question._id} className="d-flex justify-content-between align-items-center">
                            <div>
                                <a
                                    href={question.solutionLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="question-link text-decoration-none text-primary"
                                >
                                    {question.questionText}
                                </a>
                            </div>
                            
                            <Link to={`/detail/${question._id}`}>
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                >
                                    Description
                                </Button>
                            </Link>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Container>
    );
};

export default QuestionList;
