import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingPage';
import Projects from './projects';
import AboutMe from './aboutMe';
import Resume from './resume';
import Contact from './contact';



const Main = () => (
  <Switch>
  <Route exact path ="/" component = { LandingPage }/>
  <Route exact path ="/aboutMe" component = { AboutMe }/>
  <Route exact path ="/resume" component = { Resume }/>
  <Route exact path ="/contact" component = { Contact }/>
  <Route exact path ="/projects" component = { Projects }/>
  </Switch>

)

export default Main;
