import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import CreatePollPage from './pages/CreatePollPage';
import PollPage from './pages/PollPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-poll"
          element={
            <ProtectedRoute>
              <CreatePollPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/poll/:id"
          element={
            <ProtectedRoute>
              <PollPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;