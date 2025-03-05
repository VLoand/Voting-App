import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
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