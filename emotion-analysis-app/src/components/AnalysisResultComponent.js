import React from 'react';

const AnalysisResultComponent = ({ results }) => {
  return (
    <div>
      <h2>Results:</h2>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
};

export default AnalysisResultComponent;
