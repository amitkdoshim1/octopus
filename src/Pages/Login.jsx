import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', credentials);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div className="container login-container w-25 mt-5">
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
      <h2 className="text-center mb-4">Login</h2>
      <div className='d-flex justify-content-center'>
        <Link className='link-dark' to={'/signup'}>New User? Click here</Link>
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={credentials.username}
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
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Login
        </button>
      </form>
      <div className="text-center mt-3">
        <Link className='link-dark'>Forgot password?</Link>
      </div>
    </div>
  );
}