import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const userName = useRef();
  const email = useRef();
  const password1 = useRef();
  const password2 = useRef();

  const handleSignup = (e) => {
    e.preventDefault();
    if(password1.current.value!==password2.current.value){
      alert("The password not correct")
    } 
    else {
      const newUser = {
        userName: userName.current.value, 
        email: email.current.value,
        password1: password1.current.value,
      }
      userName.current.value = "";
      email.current.value = "";
      password1.current.value = "";
      password2.current.value = "";
      console.log('Signing up with:', newUser);
    }
}


  return (
    <div className="container signup-container w-25 mt-5">
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px',}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/AmanLogo.svg/255px-AmanLogo.svg.png" alt="Logo" style={{ borderRadius: '50%', width: '100px',  height: '100px',}}/>
      </div>
      <h2 className="text-center mb-4">Signup</h2>
      <div className='d-flex justify-content-center'>
        <Link className='link-dark' to={'/login'}>Already have an account? Login here</Link>
      </div>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" name="username" placeholder="Choose a username" ref={userName} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" ref={email} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password1" name="password1" placeholder="Choose a password" ref={password1} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">Repeat your password</label>
          <input type="password" className="form-control" id="password2" name="password2" placeholder="Repeat your password" ref={password2} required/>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Signup
        </button>
      </form>
    </div>
  );
}