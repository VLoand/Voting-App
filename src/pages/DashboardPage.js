import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Add this line
import { AuthContext } from '../context/AuthContext';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
          <p>No active polls found.</p>
        </section>
        <section className="past-polls">
          <h2>Past Polls</h2>
          <p>No past polls found.</p>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;