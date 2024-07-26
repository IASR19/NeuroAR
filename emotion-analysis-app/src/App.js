import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import './App.css';


const App = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4001');
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setResults(data);
    };
    return () => socket.close();
  }, []);

  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onUpload={handleUpload} />} />
        <Route path="/results" element={<ResultPage results={results} />} />
      </Routes>
    </Router>
  );
};

export default App;
