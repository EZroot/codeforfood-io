import React from 'react';
import roguelike from '../images/Animation.gif';
import fallingsand from '../images/fallingsand.gif';
import endless from '../images/endless.gif';
import vr from '../images/zombie-vr.gif';
import spaceshooter from '../images/star-shooter-best.gif';
import microwave from '../images/microwave-thru-door.gif';
import welding from '../images/welding.gif';
import multiplayer from '../images/newanimations.gif';
import fall from '../images/fall.gif';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function show2DProjects(){
  document.getElementById("2DProjects").click();

}
const projects = () => {
  return (

    <div class="pagewrapper">
    <h1><colorwhite>// Mini Projects</colorwhite></h1>
        <h3><colorwhite>PROTOTYPES / OPEN SOURCE</colorwhite><hr/></h3>
        <div class = "pagewrapperhorizontal">
        <div class="container card">
        <img class="gif" src={endless} alt="loading..." />
        <br/>
        <strong>Name - Endless Runner</strong>
        <br/><strong>Type - Simple</strong>
        <br/><a href="https://github.com/EZroot/EndlessRunner"><colorpurple>C# Monogame Source code</colorpurple></a> available.<br/>
        </div>

        <div class="container card">
        <img class="gif" src={roguelike} alt="loading..." />
        <br/><strong>Name - Reaper</strong>
        <br/><strong>Type - Prototype</strong>
        <br/><a href="https://github.com/EZroot/Reaper"><colorpurple>Unity C# Source code</colorpurple></a> available.<br/>
        </div>

        <div class="container card">
        <img class="gif" src={spaceshooter} alt="loading..." />
        <br/><strong>Name - StarShooter</strong>
        <br/><strong>Type - Small Game</strong>
        <br/><a href="https://github.com/EZroot/StarShooter"><colorpurple>C++ & SDL Source code</colorpurple></a> available.<br/>
        </div>

        <div class="container card">
        <img class="gif" src={fall} alt="loading..." />
        <br/><strong>Name - Zombie Runner</strong>
        <br/><strong>Type - Animated Physics + Group AI Prototype</strong>
        <br/><colorpurple>No Source code</colorpurple> available.<br/>
        </div>

        <div class="container card">
        <img class="gif" src={fallingsand} alt="loading..." />
        <br/><strong>Name - OpenSand</strong>
        <br/><strong>Type - Simple</strong>
        <br/><a href="https://github.com/EZroot/OpenSand"><colorpurple>C# Monogame Source code</colorpurple></a> available.<br/>
        </div>

        <div class="container card">
        <img class="gif" src={microwave} alt="loading..." />
        <br/><strong>Name - Escape The Bunker</strong>
        <br/><strong>Type - Simple</strong>
        <br/><colorpurple>No Source code</colorpurple> available.<br/>
        </div>

        <div class="container card">
        <img class="gif" src={vr} alt="loading..." />
        <br/><strong>Name - VR Prototype</strong>
        <br/><strong>Type - VR Physics + Character Mapping Prototype</strong>
        <br/><colorpurple>No Source code</colorpurple> available.<br/>
        </div>

        <div class="container card">
        <img class="gif" src={welding} alt="loading..." />
        <br/><strong>Name - VR Welding</strong>
        <br/><strong>Type - Prototype</strong>
        <br/><colorpurple>No Source code</colorpurple> available.<br/>
        </div>

        <div class="container card">
        <img class="gif" src={multiplayer} alt="loading..." />
        <br/><strong>Name - Psychological Deduction Game</strong>
        <br/><strong>Type - Multiplayer + Physics Prototype</strong>
        <br/><a href="https://github.com/EZroot/Engineers/tree/main/Assets"><colorpurple>Unity C# Source code</colorpurple></a> available.<br/>
        </div>

        </div>
      </div>
  );
}
export default projects;
