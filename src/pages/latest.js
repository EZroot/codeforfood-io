import react from 'react';
import Latest from '../components/Page/Latest.css';
import s1 from './screenshot.png';
import s2 from './screenshot2.png';
import s3 from './screenshot3.png';
import s4 from './screenshot4.png';
import screeny from './screeny.png';
import tinyhouse from './house-tiny.png';
import jobboard from './job-board.png';
import house1 from './house1.png';
import box from './box.png';
import grassground from './grass-ground.png';
import tree from './tree.png';
import talltree from './tall-tree.png';

const latest = () => {
    return(
      <div class = "Latest">
        <p>
        <br/>
        <br/>
            <h3><purple>Atlantic Bound</purple><hr/></h3>
              In this game you live in a small community where you and your neighbours control the outcome through political dominance + market manipulation.
              <br/>
              <br/>
              The town has it's own political system, laws, and capitalistic market.
              <br/>
              <br/>
              As a player, you can work for someone else or try your hand at running a business.
              <br/>
              Build your reputation among the citizens and climb the political ladder to town President.
              <br/>
              <br/>
              Each member is a key part of your society with their own personality, goals, and skills, allowing them to make choices based on their unique personality.
              <br/>
              <br/>
              <img class="Latest img2" src={screeny} alt="loading..." />
              <center><h4>[ EARLY WIP, SUBJECT TO CHANGE ]</h4></center>
              <h3>Features<hr/></h3>
              <li>Work your way up the political hierarchy</li>
              <li>Influence the simulated economics of your town</li>
              <li>Work for a business, own a business and build your brand, or live off grid.</li>
              <li>Level up your intellect, strength, charisma</li>
              <li>Balance hunger, temperature, hygiene and sleep</li>
              <li>Learn new abilities as you level</li>
              <br/>
              Dive in and become Atlantic Bound!
              <br/>
              <h3>Quick Update Nov 18, 2021<hr/></h3>
              Working on making a little alert board.
              <br/>
              It'll display people offering jobs or getting rid of items.
              <br/>
              <br/>
              It's basically craigslist.
              <br/>
              <br/>
              <img class="Latest img2" src={s4} alt="loading..." />
              <br/>
              <br/>
              Pixel art takes so long, but its a lot of fun.
              <br/>
              Just throwing out a few more screenshots/art:
              <br/>
              <br/>
              <img class="Latest img2" src={s1} alt="loading..." />
              <img class="Latest img2" src={s3} alt="loading..." />
              <img class="Latest img2" src={tinyhouse} alt="loading..." />
              <img class="Latest img2" src={house1} alt="loading..." />
              <img class="Latest img1" src={tree} alt="loading..." />
              <img class="Latest img1" src={talltree} alt="loading..." />
              <img class="Latest img1" src={jobboard} alt="loading..." />
              <img class="Latest img1" src={box} alt="loading..." />
              <img class="Latest img1" src={grassground} alt="loading..." />
              <br/>
              <br/>
              Like the horrible mountains in the background, this doesn't represent it's final look and the art is subject to change.
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
    );
}
export default latest;
