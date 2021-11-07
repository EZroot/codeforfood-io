import {useState,useEffect} from 'react';
import './Form.css';
import Axios from 'axios';
import qs from 'qs';
import { useAlert } from 'react-alert';
import {Button, ButtonFilled } from '../Button/Button';

const publicIp = require('public-ip');


/*divide prop length by width of 10 or something and add new p accordingly*/
export default function LoginForm(props){
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const login=()=>{
  Axios.post('https://codeforfood.io/auth/login',
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
    <div class="Form">
          <label>
            <p>Username</p>
            <input type="text"  onChange={e=>setUsername(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e=>setPassword(e.target.value)}/>
          </label>
        <br/>
        <Button text="Login" onClick={login}/>
    </div>
  )
}

export function EmailForm(props){
  const[contactName, setName] = useState("");
  const[contactEmail, setEmail] = useState("");
  const[contactMessage, setMessage] = useState("");

  const[ip, setIP] = useState("");

    const alert = useAlert()

    const email=()=>{
      alert.show('Email Sent To developer@codeforfood.io');
      Axios.post('https://codeforfood.io/auth/send',
      qs.stringify({
              name: contactName, //gave the values directly for testing
              email: contactEmail,
              message: contactMessage + " - from "+ip
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(function(response) {
          console.log(response);
      })};

      const getData = async () => {
        setIP(await publicIp.v4());
      };

      useEffect( () => {
        //passing getData method to the lifecycle method
        getData()
      }, []);

  return(
    <div class="Form">
          <label>
            <p>Name</p>
            <input type="text"  onChange={e=>setName(e.target.value)} />
          </label>
          <label>
            <p>Email</p>
            <input type="text" onChange={e=>setEmail(e.target.value)}/>
          </label>
          <label>
            <p>Message</p>
            <textarea onChange={e=>setMessage(e.target.value)} placeholder="Project details..."/>
          </label>
        <br/>
        <ButtonFilled text="Send Email" onClick={email}/>
    </div>
  )
}
