import react from 'react';
import './Service.css';

/*divide prop length by width of 10 or something and add new p accordingly*/
export default function Service(props){
  return(
    <div class = "Service">
      <h2><white>// HIRE ME</white></h2>
      <p>
        <h3><purple>## SERVICES </purple><hr/></h3>
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
    </div>
  )
}
