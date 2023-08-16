import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import backgroundImg from './pic4.jpg';

function App() {
  const [isSignup, setIsSignup] = useState(true);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <Router>
       <div className='app-container' style={{ backgroundImage: `url(${backgroundImg})`}}>
        <h1 id='title'>SPARDHA 2023</h1>
        <div className='auth-container'>
          {isSignup ? (
            <Signup />
          ) : (
            <Login />
          )}
          <p>
            <span style={{ color: 'white' }}>
              {isSignup ? "Already have an account? " : "Don't have an account? "}
            </span>
            <button className='switch-button' onClick={handleSwitch}>
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;

