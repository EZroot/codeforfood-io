import React, { useState } from 'react';
import Axios from 'axios';
import qs from 'qs';

export default function Services(){
  const[contactName, setName] = useState("");
  const[contactEmail, setEmail] = useState("");
  const[contactMessage, setMessage] = useState("");

  const email=()=>{
    Axios.post('https://codeforfood.io/auth/send',
    qs.stringify({
            name: contactName, //gave the values directly for testing
            email: contactEmail,
            message: contactMessage
    }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(function(response) {
        console.log(response);
    })  }

  return (
    <div>
    <div class="pagewrapper">
    <h1><colorwhite>// Code? Food? Om nom?</colorwhite></h1>
      <p>
      <h3><colorwhite>Have an idea?</colorwhite><hr/></h3>
      Let us help you bring your idea to life with our atlantic work ethic.
      <h3>## SERVICES</h3>
      <ul>
      <li>2D/3D Game Development</li>
      <li>Rapid Prototyping of Interactive Mechanics</li>
      <li>2D Pixel Art</li>

      </ul>
      <colorwhite>Don't have a big budget? Thats okay!</colorwhite>
      <br/>
      <br/>
      We give <colorwhite><strong><i>special discounts</i></strong></colorwhite> to individuals with smaller request.
      <br/ >
      <br/ >
      Let's talk about your project. Contact us below or send us an <strong><a href="mailto:developer@codeforfood.io">EMAIL</a></strong>
      </p>
      <div className="pagewrapper">
          <label>
            <p>Name</p>
            <input type="text" onChange={e=>setName(e.target.value)}/>
          </label>
          <label>
            <p>Email</p>
            <input type="email" onChange={e=>setEmail(e.target.value)}/>
          </label>
          <label>
            <p>Message</p>
            <textarea onChange={e=>setMessage(e.target.value)} placeholder="Tell us about your project"/>
          </label>
          <div class="button" onClick={email}>
            <span>Send</span>
          </div>
      </div>
      </div>
      </div>
  );
}
