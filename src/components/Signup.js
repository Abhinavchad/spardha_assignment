import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a backend server)
    console.log(formData);
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='auth-box'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='input-group'>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-group'>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-group'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-group'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
