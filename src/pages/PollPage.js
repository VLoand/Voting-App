import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Add Link here
import mockPolls from '../data/mockPolls';
import '../styles/PollPage.css';

const PollPage = () => {
  const { id } = useParams();
  const poll = mockPolls.find(poll => poll.id === parseInt(id));
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!selectedOption) return;
    // Mock vote logic (to be replaced with backend integration)
    console.log(`Voted for: ${selectedOption}`);
    setHasVoted(true);
  };

  if (!poll) {
    return <p>Poll not found.</p>;
  }

  return (
    <div className="poll-page">
      <h1>{poll.title}</h1>
      <p>Created by: {poll.createdBy}</p>
      <div className="poll-options">
        {poll.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="poll-option"
              value={option}
              onChange={() => setSelectedOption(option)}
              disabled={hasVoted}
            />
            {option}
          </label>
        ))}
      </div>
      {!hasVoted ? (
        <button onClick={handleVote} className="btn btn-primary">
          Vote
        </button>
      ) : (
        <p>Thank you for voting!</p>
      )}
      <Link to="/dashboard" className="btn btn-secondary">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default PollPage;