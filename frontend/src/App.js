import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminForm from './AdminForm';
import DataGrid from './DataGrid';
import Login from './Login';
import WelcomePage from './Welcome';
import './App.css';

const App = () => {
  const [editingData, setEditingData] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
    window.location.href = '/'; // Redirect to welcome
  };

  return (
    <Router>
      <div style={{ padding: '1rem' }}>
        <h1 className="app-title">Shape Data Application</h1>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
          <Route
            path="/admin"
            element={
              <>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
                <AdminForm editingData={editingData} clearEdit={() => setEditingData(null)} authToken={authToken} />
                <DataGrid onEdit={setEditingData} authToken={authToken} />
              </>
            }
          />
          <Route
            path="/user"
            element={
              <>
                <Link to="/" className="back-button">← Back to Homepage</Link>
                <DataGrid />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
