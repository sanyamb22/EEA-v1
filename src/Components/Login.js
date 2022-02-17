import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import axios from './axios';


function Login() {
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');


  const handleClick = async (e) => {
    e.preventDefault()
    const idpass = { name: userName, pass: password }
    console.log(idpass)
    try{
      const response = await axios.post('/api/login', idpass)
      console.log(response)
    } catch (err) {
      console.log(`${err.message}`)
    }
  }

  return (
    <>
      <div className='main'>
        <div className='hero-section'>
          <img src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='i' />
        </div>
        <div className='login-form'>
          <form>
            <h1 >Login</h1>
            <input type='text' value={userName} className='login-fields' placeholder='Username' onChange={(e) => { setName(e.target.value) }} />
            <input type='password' value={password} className='login-fields' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
            <button type='button' name='submit' className='login-fields' onClick={handleClick} >Login</button>
            <Link to='/signup'><button type='button' name='signup' className='login-fields'>Signup</button></Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
