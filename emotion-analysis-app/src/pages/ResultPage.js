import React from 'react';
import AnalysisResultComponent from '../components/AnalysisResultComponent';

const ResultPage = ({ results }) => {
  return (
    <div>
      <h1>Result Page</h1>
      <AnalysisResultComponent results={results} />
    </div>
  );
};

export default ResultPage;
