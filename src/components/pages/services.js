import {useState,useEffect} from 'react'
import Axios from 'axios';
import qs from 'qs';
import { useAlert } from 'react-alert'
const publicIp = require('public-ip');

export default function Services(){
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

  return (
    <div>
    <div class="pagewrapper">
    <h1><colorwhite>// Hire Us</colorwhite></h1>
      <p>
      <h3><colorpurple>## SERVICES OFFERED</colorpurple><colorwhite>  2021</colorwhite><hr/></h3>
      Need programming help? 
      <br/>
      <br/>
      We can help!
      <br/>
      <br/>
        We specialize in:
      <ul>
      <li>2D/3D Game Development (Desktop/Mobile)</li>
      <li>Rapid Prototyping of Interactive Mechanics</li>
      <li>2D Pixel Art</li>

      </ul>
      We give discounts to non-professionals / students.
      <br/ >
      <br/ >
      Enough about us, let's talk about your project!
      </p>
      <div className="formwrapper">
          <label>
            <p>Name</p>
            <input type="text" onChange={e=>setName(e.target.value)}/>
          </label>
          <label>
            <p>Your Email</p>
            <input type="email" onChange={e=>setEmail(e.target.value)}/>
          </label>
          <label>
            <p>Message</p>
            <textarea onChange={e=>setMessage(e.target.value)} placeholder="Tell us about your project..."/>
          </label>
          <div>
          <br/>
          <div class="formbutton" onClick={email}>
            <span>Send Email</span>
          </div>
          </div>
      </div>
      <p>
      Or email us at <a href="mailto:developer@codeforfood.io"><strong>developer@codeforfood.io</strong></a>
      <br/>
      We're looking forward to hearing from you!
      </p>
      </div>
      </div>
  );
}
