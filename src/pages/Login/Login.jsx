import React, { useState } from 'react';
import './login.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="login-container">
  <form className="login-form">
    <h2>Login</h2>
    <div className="form-group">
      <input
        className="login-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="form-group">
      <button className="login-button" onClick={handleLogin}>
        <Link to={'/Home'}>Login</Link>
      </button> 
      <button className="Signup-button">
      <Link className='signLink' to="/Signup">Signup</Link>
    </button>
    </div>
  </form>
</div>

  );
};

export default Login;
