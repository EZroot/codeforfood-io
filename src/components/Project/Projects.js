import react from 'react';
import roguelike from './Animation.gif';
import fallingsand from './fallingsand.gif';
import endless from './endless.gif';
import vr from './zombie-vr.gif';
import spaceshooter from './star-shooter-best.gif';
import microwave from './microwave-thru-door.gif';
import welding from './welding.gif';
import multiplayer from './newanimations.gif';
import fall from './fall.gif';
import retroprototype from './retroprototype.gif';
import codeparser from './codeparser.gif';
import consolegame from './console-gameoflife.gif';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './Projects.css';

/*divide prop length by width of 10 or something and add new p accordingly*/
export default function Projects(props){
  return(
    <div class = "Projects">
    <h2><white>// PROJECTS</white></h2>
    <h3>
       <white>PROTOTYPES / OPEN SOURCE</white>
       <hr/>
    </h3>

    <grid>
    <container>

          <img src={endless} alt="loading..." />
          <br/>
          <p>
             <purple>Project Name</purple>
          <hr/>
          Endless Runner</p>
          <p>
             <purple>Details</purple>
          <hr/>
          Graphics: Monogame <br/>
          Language: C#
          </p><p>
          <purple>Source Code</purple>
          <hr/>
          <a href="https://github.com/EZroot/EndlessRunner">
             <white>github.com/EZroot/EndlessRunner</white>
          </a></p>

       </container>

       <container>

          <img src={roguelike} alt="loading..." />
          <br/>
          <p>
             <purple>Project Name</purple>
          <hr/>
          Immortal Vengeance</p>
          <p>
             <purple>Details</purple>
          <hr/>
          Engine: Unity <br/>
          Language: C#
          </p>
          <p>
          <purple>Source Code</purple>
          <hr/>
          <a href="https://github.com/EZroot/ImmortalVengeance">
             <white>github.com/EZroot/ImmortalVengeance</white>
          </a>
          </p>

       </container>
       <container>

          <img src={spaceshooter} alt="loading..." />
          <br/>
          <p>
             <purple>Project Name</purple>
          <hr/>
          Star Shooter</p>
          <p>
             <purple>Details</purple>
          <hr/>
          Graphics: SDL2 <br/>
          Language: C++
          </p><p>
          <purple>Source Code</purple>
          <hr/>
          <a href="https://github.com/EZroot/StarShooter">
             <white>github.com/EZroot/StarShooter</white>
          </a></p>

      </container>

       <container>

          <img src={fall} alt="loading..." />
          <br/>
          <p>
             <purple>Project Name</purple>
          <hr/>
          Zombie Runner</p>
          <p>
             <purple>Details</purple>
          <hr/>
          Engine: Unity <br/>
          Language: C#
          </p><p>
          <purple>Source Code</purple>
          <hr/>
          <white>Private</white></p>

        </container>

        <container>

           <img src={consolegame} alt="loading..." />
           <br/>
           <p>
              <purple>Project Name</purple>
           <hr/>
           Game of Life</p>
           <p>
              <purple>Details</purple>
           <hr/>
           Graphics: Cmd <br/>
           Language: C#
           </p><p>
           <purple>Source Code</purple>
           <hr/>
           <a href="https://github.com/EZroot/GameOfLifeConsole"><white>github.com/EZroot/GameOfLifeConsole</white></a>
           </p>

        </container>

        <container>

           <img src={fallingsand} alt="loading..." />
           <br/>
           <p>
              <purple>Project Name</purple>
           <hr/>
           OpenSand</p>
           <p>
              <purple>Details</purple>
           <hr/>
           Graphics: Monogame <br/>
           Language: C#
           </p><p>
           <purple>Source Code</purple>
           <hr/>
           <a href="https://github.com/EZroot/OpenSand">
              <white>github.com/EZroot/OpenSand</white>
           </a></p>

        </container>

        <container>

           <img src={retroprototype} alt="loading..." />
           <br/>
           <p>
              <purple>Project Name</purple>
           <hr/>
           Retro FPS</p>
           <p>
              <purple>Details</purple>
           <hr/>
           Graphics: Unity <br/>
           Language: C#
           </p><p>
           <purple>Source Code</purple>
           <hr/>
           <white>Private</white>
           </p>

        </container>

       <container>

          <img src={codeparser} alt="loading..." />
          <br/>
          <p>
             <purple>Project Name</purple>
          <hr/>
          Code Parser</p>
          <p>
             <purple>Details</purple>
          <hr/>
          Graphics: Unity <br/>
          Language: C#
          </p><p>
          <purple>Source Code</purple>
          <hr/>
          <white>Private</white>
          </p>

       </container>

       <container>

          <img src={microwave} alt="loading..." />
          <br/>
          <p>
             <purple>Project Name</purple>
          <hr/>
          Escape The Bunker</p>
          <p>
             <purple>Details</purple>
          <hr/>
          Engine: Unity <br/>
          Language: C#
          </p><p>
          <purple>Source Code</purple>
          <hr/>
          <white>Private</white></p>

       </container>

       <container>

        <img src={vr} alt="loading..." />
          <br/>
          <p>
             <purple>Project Name</purple>
          <hr/>
          VR 3D Character Mapping</p>
          <p>
             <purple>Details</purple>
          <hr/>
          Engine: Unity<br/>
          Language: C#
          </p><p>
          <purple>Source Code</purple>
          <hr/>
          <white>Private</white></p>

       </container>

       <container>

          <img src={welding} alt="loading..." />
          <br/>
          <p>
             <purple>Project Name</purple>
          <hr/>
          VR Welding Prototype</p>
          <p>
             <purple>Details</purple>
          <hr/>
          Engine: Unity <br/>
          Language: C#
          </p><p>
          <purple>Source Code</purple>
          <hr/>
          <white>Private</white></p>

       </container>

       <container>

          <img src={multiplayer} alt="loading..." />
          <br/>
          <p><purple>Project Name</purple><hr/>
          Station Terror</p>
          <p><purple>Details</purple><hr/>
          Engine: Unity <br/>
          Language: C#
          </p>
          <p>
          <purple>Source Code</purple><hr/>
          <a href="https://github.com/EZroot/StationTerror"><white>github.com/EZroot/StationTerror</white></a>
          </p>

     </container>
    </grid>
    </div>
  )
}
