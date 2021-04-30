import React from 'react';
import './App.css';
import{Layout, Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './Components/main';
import { Link, Route, HashRouter } from 'react-router-dom';
function App() {
  return (
    <HashRouter basename='/'>
      <div className="MainPage">
          <Layout>
              <Header className= "header-color" title={<Link style={{textDecoration: 'none', color: 'white'}}to="/">
               Anthony Carr
              </Link>}  scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}}to="/">         
              </Link>}>
                  <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>

              </Content>
          </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
