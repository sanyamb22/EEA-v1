import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

function Signup() {

  const [account, setAccount] = useState('')
  const navigate = useNavigate();

  const handleCLick = (e) => {
    e.preventDefault()
    console.log(account)
    if (account === "political"){
      navigate('pe')

    }
    else if(account === "personal"){
      navigate('personal')
    }

  }

  return (
    <>
      <div className="main-block">
        <div className="heading">
          <h1 className="heading-line">Account Type</h1>
        </div>
        <div className="signup-form">
          <form>
          <RadioGroup row >
          <FormControlLabel value="political" control={<Radio />} label="Political Entity" onChange={(e) => { setAccount(e.target.value)}}/>
          <FormControlLabel value="personal" control={<Radio />} label="Personal" onChange={(e) => { setAccount(e.target.value)}}/>
          </RadioGroup>
          </form>
        </div>
      </div>
        <button id='signup-button' type='button' name='next' className='login-fields' onClick={handleCLick}>Next</button>
    </>
  );
}

export default Signup
