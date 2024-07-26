import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadComponent = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      setLoading(true);
      await onUpload(file);
      setLoading(false);
      navigate('/results');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
      <button type="submit" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
};

export default UploadComponent;
