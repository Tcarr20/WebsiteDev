import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl'
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import MyAvatar from '../AvatarCropped600.png'

class Resume extends Component{
	render(){
		return(
			<div>
				<Grid>

				<Cell col={4}>
					<div  style={{textAlign: 'center'}}>
						<img
						 src={MyAvatar}
						 alt="avatar"
						 style = {{height: '200px'}}
						 />
					</div>
					<h2 style={{paddingTop: '2em'}}>Anthony Carr</h2>
					<h4 style = {{color: 'grey'}}>Software Developer</h4>
					<hr style ={{borderTop: '1em solid #00000', width: '50%'}}/>
					<p>
						I	am	an	aspiring	software	developer	that	has	spent	several	years	programming, animating,
							designing,	and	publishing	my	own	video	games	and	mobile	applications. While	developing
							on	my	own	is	a	fun	and	exciting	process,	I	want	to	take	my	skills	and apply	them	to
							something	bigger.	I	seek	opportunities	to	not	only	help	a	company develop,	but	also	myself.
					</p>
					<hr style ={{borderTop: '1em solid #00000', width: '50%'}}/>
					<h5>Address</h5>
					<p>105	Spring	St,	Aubrey,	TX	76227</p>
					<h5>Phone</h5>
					<p>(316) 880-1042</p>
					<h5>Email</h5>
					<p>Tcarr204@gmail.com</p>
				</Cell>

				<Cell className="resume-right-side" col={8}>
					<h2>Education</h2>
					
					<Education
						startYear={2016}
						endYear = {2020}
						schoolName="University of North Texas"
						schoolDescription="Graduated with BS	in	Computer	Science. In	progress	Certification	in	game	programming. Cumulative	GPA	3.45"
					/>
					<Education
						startYear={2014}
						endYear ={2016}
						schoolName="Butler	County	Community	Collage"
						schoolDescription="Courses	in	3D	Animation	and	Interactive	Technology. No	Degree,	transfer. Presidential	Honor	Roll. Dean’s	List"
					/>


					<hr style= {{borderTop: '3px solid #fff'}}/>

					<h2>Experience</h2>

					<Experience
						startYear ={2020}
						endYear= "current"
						jobName = "Software Developer"
						jobLocation = "State Farm Insurance"
						jobDescription = "I started as an intern on my last semester as an undergrad, then I was hired on full time as a Software Dev. "
						jobList1 = "Worked	on	projects	here	such	as: "
						jobList2 = "Setting	up	a workflow to migrate to REST micro-services for my team."
						jobList3 = "Designing and purposing a change to current service, to parallelize and export functionality to a micro-service "
						jobList4 = "Writing unit tests with Mockito."
						jobList5 = "Integrating a gitlab CI/CD Pipeline to micro-services."
						jobList6 = "Updating and maintaining documentation."
						
					/>

					<Experience
						startYear ={2018}
						endYear= {2020}
						jobName = "Assistant Manager"
						jobLocation = "UNT	Student	Computer	Labs"
						jobDescription = "This	opportunity	allowed	for	exciting	challenges	in	day	to	day computation	issues."
						jobList1 ="Worked	on	projects	here	such	as: "
						jobList2 ="Setting	up	server	to	charge	students	for	copying	on	in	house	printers."
						jobList3 = "Updating	and	maintaining	Images	on	Lab	computers."
						jobList4 = "Rewiring	Laboratory	network	after	remodel."
						jobList5 = "Creating tools that allowed me to better generate schedules for my team's working hours"
						jobList6 = "Successfully purposed a online working alternative, during Covid-19 pandemic outbreak, resulting in no one losing their jobs."
						
					/>

					<Experience
						startYear ={2013}
						endYear={2015}
						jobName = "DJ	and	Master	of	Ceremonies"
						jobLocation = "Complete	Weddings	and	Events,	Wichita	Kansas."
						jobDescription ="This	was	an	experience	that	allowed	my	technical,	public	speaking	and problem	solving	skills	to	work	simultaneously."
						jobList1 = "Responsibilities	include:"
						jobList2 = "Setting	up	meetings	with	Clients	to	discuss,	requirements,	layout,	and timing	at	event."
						jobList3 = "Keeping	record	of	music	library,	format	drives	for	specific	machine usage."
						jobList4 = "Setup	system	for	transportable	photo-boot."
						jobList5 = "Setup	and	Tear	down	of	lighting,	and	sound	system."
						jobList6 = "Created	solutions	for	technical	issues	that	would	arise	on	event	by event	basis."

					/>


					<hr style= {{borderTop: '3px solid #fff'}}/>
					<h2>Skills</h2>

					<Skills
						skill = "C++"
						progress = {100}
					/>

					<Skills
						skill = "C"
						progress = {90}
					/>

					<Skills
						skill = "C#"
						progress = {70}
					/>

					<Skills
						skill = "Python"
						progress = {50}
					/>

					<Skills
						skill = "JavaScript"
						progress = {50}
					/>

					<Skills
						skill = "Css"
						progress = {60}
					/>

					<Skills
						skill = "Object	Oriented	Programming"
						progress = {100}
					/>

					<Skills
						skill = "Auto-Desk 3DS Max"
						progress = {80}
					/>

					<Skills
						skill = "Auto-Desk Inventor"
						progress = {60}
					/>

					<Skills
						skill = "Adobe Creative Suite: Illustrator, Photoshop,	Premier	Pro,	Indesign"
						progress = {70}
					/>

					<Skills
						skill = "Microsoft Office: Word, Excel, PowerPoint"
						progress = {100}
					/>

				</Cell>

				</Grid>
			</div>
		)

	}

}

export default Resume;
