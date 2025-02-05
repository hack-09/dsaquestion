import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/QuestionDetail.css'

const QuestionDetail = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_CALL}/api/questions/${id}`);
                const data = await response.json();
                setQuestion(data);
            } catch (error) {
                console.error('Error fetching question:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestion();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!question) {
        return <div>Question not found.</div>;
    }

    return (
        <div className="question-detail">
            <h2>{question.text}</h2>
            <p><strong>Description:</strong> {question.description}</p>
            <p><strong>Solution Link:</strong> <a href={question.solutionLink} target="_blank" rel="noopener noreferrer">View Solution</a></p>
            <h3>User Uploaded Code:</h3>
            <pre>{question.userCode}</pre>
            <h3>Results:</h3>
            <pre>{question.results}</pre>
        </div>
    );
};

export default QuestionDetail;