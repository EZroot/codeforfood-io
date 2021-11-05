import React from 'react';
import logo from '../images/codeforfood.png';

const index = () => {
  return (


    <div class="pagewrapper">
    <h1><img src={logo} alt="loading..." /></h1>
    <p>
    <h3><colorpurple>About CodeForFood.io</colorpurple><hr/></h3>
    Satisfying my mind hunger one project at a time. Thus...
    <h3><colorwhite>CodeForFood.IO was born</colorwhite></h3>
    Everyone should be able to make a game, no matter what age or profession.
    <br/>
    <br/>
    <a href="mailto:developer@codeforfood.io"><colorpurple>Contact me</colorpurple></a> to get help with your project or idea!
    <br/>
    <br/>
    <hr/>
    Stay up to date and <a href="https://discord.gg/7jwRfsU9Jr" ><colorpurple>Join our Discord</colorpurple></a>
    <br/>
    Follow my <a href="https://twitch.tv/codeforf00d" ><colorpurple>Software Development on Twitch</colorpurple></a>
    <br/>
    <br/>

    </p>
</div>
  );
}
export default index;
