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
    <h1><colorwhite>// Hire Me</colorwhite></h1>
      <p>
      <h3><colorpurple>## SERVICES </colorpurple><colorwhite> </colorwhite><hr/></h3>
      Have an idea for a game? Or an interactive story? Maybe you just need a little coding assistance for an existing project or school.
      <br/>
      <br/>
      Whatever it is, I can help!
      <br/>
      <br/>
      I specialize in:
      <ul>
      <li>2D/3D Game Development (Desktop/Mobile)</li>
      <li>Rapid Prototyping of Interactive Mechanics</li>
      <li>VR/AR Applications</li>
      </ul>
      I also give discounts to non-professionals / students.
      <br/ >
      <br/ >
      Contact me below and let's talk about your project!
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
            <textarea onChange={e=>setMessage(e.target.value)} placeholder="Project details..."/>
          </label>
          <div>
          <br/>
          <div class="formbutton" onClick={email}>
            <span>Send Email</span>
          </div>
          </div>
      </div>
      <p>
      Or email me at <a href="mailto:developer@codeforfood.io"><strong>developer@codeforfood.io</strong></a>
      <br/>
      I look forward to hearing from you!
      </p>
      </div>
      </div>
  );
}
