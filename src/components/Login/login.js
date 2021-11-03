import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import qs from 'qs';

import './login.css';


export default function LoginPage(req){
  const[usernameReg, setUsernameReg] = useState('');
  const[passwordReg, setPasswordReg] = useState('');

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const register=()=>{
    Axios.post('https://codeforfood.io/register', {
      username: usernameReg,
      password: passwordReg,
    }).then((response)=>{
      console.log("Response: "+response);
    }).catch(err => console.log(err));
  };

  const login=()=>{
    Axios.post('https://codeforfood.io/login',
    qs.stringify({
            username: username, //gave the values directly for testing
            password: password
    }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(function(response) {
        console.log(response);
    })
  };

  return(
    <div className="pagewrapper">
      <h1>// Log In</h1>
        <label>
          <p>Username</p>
          <input type="text" onChange={e=>setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e=>setPassword(e.target.value)}/>
        </label>
        <div class="button">
          <button onClick={login}><span>Log In</span></button>
        </div>
    </div>
  )
}
