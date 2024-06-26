import React, { useState } from 'react';
import { validateUsername } from './Validation'; // Import the function from './Validation.js'
import './App.css'

function Login() {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerError, setRegisterError] = useState('');

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // SEND TO SERVER
    }
  
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        if (registerPassword !== confirmPassword) {
            setRegisterError("Passwords do not match");
            return;
        }
        // SEND TO SERVER
    }

    const handleUsernameChange = (event) => {
        if (!validateUsername(event.target.value)) {
            setRegisterError("Username can only contain letters and numbers");
            return;
        }
        setRegisterError('');
        setRegisterUsername(event.target.value);
    }
  
    return (
      <div>
        <main>
        <section id="login">
          <h2>LOGIN</h2>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="username">Username:</label>
            <input type='text' id='username' name='username' value={loginUsername} onChange={e=>setLoginUsername(e.target.value)}></input>
            <label htmlFor="password">Password:</label>
            <input type='password' id='password' name='password' value={loginPassword} onChange={e=>setLoginPassword(e.target.value)}></input>
            <button type='submit'>Login</button>
          </form>
        </section>
  
        <section id='register'>
          <h2>REGISTER</h2>
          <form onSubmit={handleRegisterSubmit}>
            <label htmlFor='new-username'>Username:</label>
            <input type='text' id='new-username' name='new-username' value={registerUsername} onChange={handleUsernameChange}></input>
            <label htmlFor="new-password">Password:</label>
            <input type='password' id='new-password' name='new-password' value={registerPassword} onChange={e=>setRegisterPassword(e.target.value)}></input>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type='password' id='confirm-password' name='confirm-password' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}></input>
            <button type='submit'>Register</button>
          </form>
          {registerError && <p className="error">{registerError}</p>}
        </section>
        </main>
      </div>
    );
  }
  
  export default Login;
  
