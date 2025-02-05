import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import AddQuestion from './components/AddQuestion';
import QuestionDetail from './components/QuestionDetail';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h1>DSA Question Solving App</h1>
          <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/add" className="nav-item">Add Question</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<QuestionList />} 
            />
            <Route 
              path="/add" 
              element={<AddQuestion/>} 
            />
            <Route 
              path="/detail/:id" 
              element={<QuestionDetail/>} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
