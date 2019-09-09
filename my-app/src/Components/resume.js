import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl'
import Education from './education';
import Experiance from './experiance';

class Resume extends Component{
	render(){
		return(
			<div>
				<Grid>

				<Cell col={4}>
					<div  style={{textAlign: 'center'}}>
						<img
						 src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
						 alt="avatar"
						 style = {{height: '200px'}}
						 />
					</div>
					<h2 style={{paddingTop: '2em'}}>Anthony Carr</h2>
					<h4 style = {{color: 'grey'}}>Programmer</h4>
					<hr style ={{borderTop: '1em solid #00000', width: '50%'}}/>
					<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<hr style ={{borderTop: '1em solid #00000', width: '50%'}}/>
					<h5>Address</h5>
					<p>123 Hacker way</p>
					<h5>Phone</h5>
					<p>(316) 880-1042</p>
					<h5>Email</h5>
					<p>Tcarr204@gmail.com</p>
					<h5>Website</h5>
					<p>YOU ARE HERE</p>
				</Cell>

				<Cell className="resume-right-side" col={8}>
					<h2>Education</h2>
					<Education
						startYear={2013}
						endYear ={2014}
						schoolName="Kansas State University"
						schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
					/>
					<Education
						startYear={2014}
						endYear ={2016}
						schoolName="Butler Community College"
						schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
					/>
					<Education
						startYear={2016}
						endYear = "Current"
						schoolName="University of North Texas"
						schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
					/>

					<hr style= {{borderTop: '3px solid #1f4037'}}/>
					<h2>Experiance</h2>
					
					<Experiance
						startYear ={2013}
						endYear={2015}
						jobName = "Roller City"
						jobDescription ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
					/>


				</Cell>

				</Grid>
			</div>
		)

	}

}

export default Resume;
