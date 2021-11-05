import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import blog from "../pages/blog"
import team from "../pages/team"
import index from "../pages/index"
import userlogin from "../Login/login"
import services from "../pages/services"
import projects from "../pages/projects"

function App(){

  return (
          <Router>
            <div>
                <div class="topnav">
                    <farleft>
                      <Link class="button" to="/">
                      <span>CODEFORFOOD.IO</span>
                      </Link>
                    </farleft>
                    <center>
                      <Link class="button" to="/services">
                      <span>/ HIRE ME</span>
                      </Link>
                      <Link class="button" to="/projects">
                      <span>/ PROJECTS</span>
                      </Link>
                      <Link class="button" to="/blog">
                      <span>/ LOG</span>
                      </Link>
                      <Link class="button" to="/team">
                      <span>/ TEAM</span></Link>
                    </center>
                    <farright>
                      <Link class="button" to="/userlogin">
                      <span>SIGN-UP/LOGIN</span>
                      </Link>
                    </farright>
                </div>
            <Switch>
                <Route path='/blog' component={blog} />
                <Route path='/team' component={team} />
                <Route path='/userlogin' component={userlogin} />
                <Route path='/services' component={services} />
                <Route path='/projects' component={projects} />
                <Route path='/' component={index} />
            </Switch>
            </div>
        </Router>

    );
}

export default App;
