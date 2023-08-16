import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styes.css';
import './App.css';

function App() {
  return (
    <Router>
      <h1 id='title'>SPARDHA 2023</h1>
      <div class='app-container'>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>  
    </Router>
  );
}

export default App;

