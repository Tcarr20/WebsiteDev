import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { spin } from '../App.css'
import MyAvatar from '../AvatarCropped600.png'

class Landing extends Component{
  	render(){
  		return(
  			<div className= "landing-div"style = {{width: '100%',height: '100%',margin: 'auto'}}>


          <Grid className = "landing-grid">
            <Cell col ={12}>
              <img
                src={MyAvatar}
                alt="avatar"
                className="avatar-img"
              />
              <div className="banner-text">
                <h1> Software Developer</h1>
                <hr/>

              <p> C | C++ | Unreal Visual/C++ | GML | React/ JavaScript/ CSS | 3DS Max | Adobe Suite </p>
                <div className="social-links">
                {/*Linkedin*/}
                <a href="https://www.linkedin.com/in/anthony-carr-161678152/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                {/*GitHub*/}
                <a href="https://github.com/Tcarr20" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"/>
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
