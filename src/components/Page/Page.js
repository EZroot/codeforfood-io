import react from 'react';
import codeforfood from './codeforfood.png'
import './Page.css';
import screeny from '../../pages/screeny.png';

export default function Page(props){
  return(
    <div class = "Page">
    <center><img class="Page img1" src={codeforfood} alt="loading..."/></center>
      <p>
          <h3><purple>About CodeForFood.io</purple><hr/></h3>
            Satisfying my mind hunger one project at a time. Thus...
          <h3><white>CodeForFood.IO was born</white></h3>
            A place to showcase a few projects and prototypes.
            <br/>
            <br/>
          <a href="https://codeforfood.io/latest" ><purple>Atlantic Bound</purple></a> is my current project.
          <br/>
          <br/>
            <a href="mailto:developer@codeforfood.io"><purple>Contact me</purple></a> to get help with your project or idea!
          <br/>
          <br/>
          <hr/>
            Stay up to date and <a href="https://discord.gg/7jwRfsU9Jr" ><purple>Join our Discord</purple></a>
          <br/>
            Follow my <a href="https://twitch.tv/codeforf00d" ><purple>Software Development on Twitch</purple></a>
          <br/>
          <br/>
      </p>
    </div>
  )
}
