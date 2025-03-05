import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreatePollPage.css';

const CreatePollPage = () => {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || options.some(option => !option.trim())) {
      setError('Please fill in all fields.');
      return;
    }
    // Create poll logic (to be implemented later)
    console.log('Poll created!');
  };

  return (
    <div className="create-poll-page">
      <h1>Create Poll</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Poll Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        {options.map((option, index) => (
          <label key={index}>
            Option {index + 1}:
            <input
              type="text"
              value={option}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[index] = e.target.value;
                setOptions(newOptions);
              }}
            />
          </label>
        ))}
        <button
          type="button"
          onClick={() => setOptions([...options, ''])}
          className="btn btn-secondary"
        >
          Add Option
        </button>
        <button type="submit" className="btn btn-primary">
          Create Poll
        </button>
      </form>
      <p>
        <Link to="/dashboard">Back to Dashboard</Link>
      </p>
    </div>
  );
};

export default CreatePollPage;