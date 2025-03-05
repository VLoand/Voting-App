import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import mockPolls from '../data/mockPolls';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const activePolls = mockPolls.filter(poll => poll.status === 'active');
  const pastPolls = mockPolls.filter(poll => poll.status === 'closed');

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Welcome, {user?.email}!</p>
      <button onClick={handleLogout} className="btn btn-secondary">
        Logout
      </button>
      <div className="dashboard-actions">
        <Link to="/create-poll" className="btn btn-primary">
          Create Poll
        </Link>
      </div>
      <div className="dashboard-sections">
        <section className="active-polls">
          <h2>Active Polls</h2>
          {activePolls.length > 0 ? (
            activePolls.map(poll => (
              <div key={poll.id} className="poll-card">
                <h3>{poll.title}</h3>
                <p>Created on: {poll.createdAt}</p>
                <Link to={`/poll/${poll.id}`} className="btn btn-primary">
                  View Poll
                </Link>
              </div>
            ))
          ) : (
            <p>No active polls found.</p>
          )}
        </section>
        <section className="past-polls">
          <h2>Past Polls</h2>
          {pastPolls.length > 0 ? (
            pastPolls.map(poll => (
              <div key={poll.id} className="poll-card">
                <h3>{poll.title}</h3>
                <p>Created on: {poll.createdAt}</p>
                <Link to={`/poll/${poll.id}`} className="btn btn-primary">
                  View Results
                </Link>
              </div>
            ))
          ) : (
            <p>No past polls found.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;