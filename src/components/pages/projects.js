import React from 'react';
import roguelike from '../images/Animation.gif';
import fallingsand from '../images/fallingsand.gif';
import endless from '../images/endless.gif';
import vr from '../images/zombie-vr.gif';
import spaceshooter from '../images/star-shooter-best.gif';
import microwave from '../images/microwave-thru-door.gif';
import welding from '../images/welding.gif';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function show2DProjects(){
  document.getElementById("2DProjects").click();

}
const projects = () => {
  return (

    <div class="pagewrapper">
    <h1><colorwhite>// Open Source</colorwhite></h1>
      <div class="topnav">
          <center>
            <Link class="button" onclick="show2DProjects()">
            <colorwhite>2D PROJECTS</colorwhite>
            </Link>
            <Link class="button" onclick="show3DProjects()">
            <colorwhite>3D PROJECTS</colorwhite>
            </Link>
          </center>
      </div>

        <div id="2DProjects" class = "pagewrapper">
        <p>
        <h3><colorwhite>2D</colorwhite><hr/></h3>
        </p><img class="gif" src={endless} alt="loading..." />
        <br/>
        <strong>Name - Endless Runner</strong>
        <br/><a href="https://github.com/EZroot/EndlessRunner"><colorpurple>C# Monogame Source code</colorpurple></a> available.<br/>
        <img class="gif" src={roguelike} alt="loading..." />
        <br/><strong>Name - Reaper</strong>
        <br/><a href="https://github.com/EZroot/Reaper"><colorpurple>Unity C# Source code</colorpurple></a> available.<br/>
        <img class="gif" src={spaceshooter} alt="loading..." />
        <br/><strong>Name - StarShooter</strong>
        <br/><a href="https://github.com/EZroot/StarShooter"><colorpurple>C++ & SDL Source code</colorpurple></a> available.<br/>
        <img class="gif" src={fallingsand} alt="loading..." />
        <br/><strong>Name - OpenSand</strong>
        <br/><a href="https://github.com/EZroot/OpenSand"><colorpurple>C# Monogame Source code</colorpurple></a> available.<br/>
        </div>
      </div>
  );
}
export default projects;
