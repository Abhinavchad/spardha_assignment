import React, { useState } from 'react';

import './style.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your login logic here, such as sending a request to a server.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="signup-button" type="submit">Login</button>
      </form>
      
    </div>
  );
};

export default LoginForm;
