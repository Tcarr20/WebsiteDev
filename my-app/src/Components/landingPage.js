import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { spin } from '../App.css'

class Landing extends Component{
  	render(){
  		return(
  			<div style = {{width: '100%',margin: 'auto'}}>


          <Grid className = "landing-grid">
            <Cell col ={12}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                alt="avatar"
                className="avatar-img"
              />
              <div className="banner-text">
                <h1> Game Developer</h1>
                <hr/>

              <p> C | C++ | Unreal Visual/C++ | GML | React/JavaScript/CSS | 3DS Max | Adobe Suite </p>
                <div className="social-links">
                {/*Linkedin*/}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                {/*GitHub*/}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>

                {/*Twitter*/}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true"/>
                </a>

                {/*bitbucket*/}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-bitbucket-square" aria-hidden="true"/>
                </a>

                </div>

              </div>

            </Cell>

          </Grid>
        </div>




  		)


  }
}





export default Landing;
