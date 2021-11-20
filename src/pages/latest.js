import react from 'react';
import Latest from '../components/Page/Latest.css';
import s1 from './screenshot.png';
import s2 from './screenshot2.png';
import s3 from './screenshot3.png';
import s4 from './screenshot4.png';
import screeny from './screeny.png';
import tinyhouse from './house-tiny.png';
import jobboard from './job-board.png';

const latest = () => {
    return(
      <div class = "Latest">
        <p>
        <br/>
        <br/>
            <h3><purple>Atlantic Bound</purple><hr/></h3>
              In this game you live in a small community where you and your neighbours control which type of town it will be through political dominance + market dominance.
              <br/>
              <br/>
              The town has it's own political system, laws, capitalistic market, and corruption.
              <br/>
              <br/>
              As a player, you can work for someone else or try your hand at running a business.
              <br/>
              <br/>
              Each member is a key part of your society with their own backgrounds and personality heuristics allowing for them to have jobs and make choices based on their personality type.
              <br/>
              <br/>
              <h4>[ WIP, SUBJECT TO CHANGE ]</h4>
              <img src={screeny} alt="loading..." />
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
              <h3>Dev Update - Nov 18, 2021<hr/></h3>
              Working on making a little alert board.
              <br/>
              It'll display people wanting jobs done or getting rid of items.
              <br/>
              <br/>
              It's basically craigslist.
              <br/>
              <br/>
              <img src={s4} alt="loading..." />
              <br/>
              <br/>
              Pixel art takes so long, but its a lot of fun.
              <br/>
              A little preview of the buy menu so far:
              <br/>
              <br/>
              <img src={s2} alt="loading..." />
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
