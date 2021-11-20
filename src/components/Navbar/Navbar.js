import react from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {LinkButton} from '../Button/Button';

import blog from "../../pages/blog"
import services from "../../pages/services"
import projects from "../../pages/projects"
import team from "../../pages/team"
import login from "../../pages/login"
import latest from "../../pages/latest"
import page from "../../pages/index"

export default function Navbar(props){
  return(
    <Router>
      <div >
          <div className ="Navbar">
              <farleft>
              <LinkButton text="CODEFORFOOD.IO" location="/" />
              </farleft>
              <center>
              <LinkButton text="/ ATLANTIC BOUND" location="/latest" />
              <LinkButton text="/ HIRE ME" location="/services" />
              <LinkButton text="/ PROJECTS" location="/projects" />
              <LinkButton text="/ TEAM" location="/team" />
              </center>
              <farright>
              <LinkButton text="LOGIN/SIGNUP" location="/login" />
              </farright>
          </div>
      <Switch>
      <Route path='/blog' component={blog} />
      <Route path='/latest' component={latest} />
      <Route path='/services' component={services} />
      <Route path='/projects' component={projects} />
      <Route path='/team' component={team} />
      <Route path='/login' component={login} />

      <Route path='/' component={page} />
      </Switch>
      </div>
    </Router>
  );
}
