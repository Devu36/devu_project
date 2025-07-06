import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !validatePassword(password)) {
      setError('Invalid email or password must contain 8 characters, 1 uppercase, 1 number and 1 special character.');
      return;
    }
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Sign In</h2>
        <p>
          New user? <a href="#">Create an account</a>
        </p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="checkbox-container">
            <input type="checkbox" id="keepSignedIn" />
            <label htmlFor="keepSignedIn">Keep me signed in</label>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p className="or-text">Or Sign In With</p>
        <div className="social-icons">
          <i className="fab fa-google"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>

      <div className="image-section">
        <img src="/assets/illustration.png" alt="Illustration" />
      </div>
    </div>
  );
};

export default Login;