import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with:', userInfo);
    // Add your signup logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  return (
    <div className="container signup-container w-25 mt-5">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px', // Adjust as needed
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/AmanLogo.svg/255px-AmanLogo.svg.png"
          alt="Logo"
          style={{
            borderRadius: '50%', // Make the image round
            width: '100px', // Adjust the width as needed
            height: '100px', // Adjust the height as needed
          }}
        />
      </div>
      <h2 className="text-center mb-4">Signup</h2>
      <div className='d-flex justify-content-center'>
        <Link className='link-dark' to={'/login'}>Already have an account? Login here</Link>
      </div>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Choose a username"
            value={userInfo.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={userInfo.email}
            onChange={handleInputChange} 
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Choose a password"
            value={userInfo.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Signup
        </button>
      </form>
    </div>
  );
}
