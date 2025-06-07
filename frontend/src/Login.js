import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import API_BASE_URL from './config'; // import at the top


const Login = ({ setAuthToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    //const res = await axios.post('http://127.0.0.1:8000/api/login/', { username, password });  
      const res = await axios.post(`${API_BASE_URL}/api/login/`, { username, password });

      if (rememberMe) {
        localStorage.setItem('authToken', res.data.token);
      } else {
        sessionStorage.setItem('authToken', res.data.token);
      }

      setAuthToken(res.data.token);
      navigate('/admin');
    } catch (err) {
      alert('Login failed: Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="checkbox-row">
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              /> Show Password
            </label>

            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              /> Remember Me
            </label>
          </div>

          <button type="submit">Login</button>
        </form>
        <Link to="/" className="back-link">← Back to Homepage</Link>
      </div>
    </div>
  );
};

export default Login;
