import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const generateShapes = (count = 25) => {
    const types = ['circle', 'square', 'triangle'];
    return Array.from({ length: count }, (_, i) => {
      const type = types[Math.floor(Math.random() * types.length)];
      const left = Math.random() * 100;
      const bottom = -50 - Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = 8 + Math.random() * 6; // vary speed

      return (
        <div
          key={i}
          className={`shape ${type}`}
          style={{
            left: `${left}%`,
            bottom: `${bottom}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    });
  };

  return (
    <div className="welcome-wrapper">
      {/* Animated background */}
      <div className="shape-bg">{generateShapes(25)}</div>

      {/* Foreground content */}
      <div className="welcome-container">
        <h1>Welcome to Shape Data App</h1>
        <p>Manage or view shapes with color and timestamp data.</p>
        <div className="welcome-buttons">
          <Link to="/login" className="btn">Admin Login</Link>
          <Link to="/user" className="btn outline">User View</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
