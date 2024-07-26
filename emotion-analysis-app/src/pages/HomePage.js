import React from 'react';
import { Link } from 'react-router-dom';
import UploadComponent from '../components/UploadComponent';

const HomePage = ({ onUpload }) => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <UploadComponent onUpload={onUpload} />
      <Link to="/results">Go to Results</Link>
    </div>
  );
};

export default HomePage;
