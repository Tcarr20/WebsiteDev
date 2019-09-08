import React, { Component } from 'react';
import {Grid, Cell, ListItem,List, ListItemContent} from 'react-mdl';

class Contact extends Component{
	render(){
		return(
			<div className= "contact-body">
				<Grid className = "contact-grid">
					<Cell col={6}>
						<h2>Anthony Carr</h2>
						<img
						src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
						alt="avatar"
						style={{height:'250px'}}
						/>
						<p style = {{width: '75%', margin: 'auto',paddingTop: '1em'}}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.

						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/>
						<div className = "contact-list">
							<List>
							<ListItem>
								<ListItemContent style ={{fontSize: '25px', fontFamily: 'Anton', justifyContent: 'right'}}>
									<i className = "fa fa-phone-square" aria-hidden="true"/>
										(316) 880-1042
								</ListItemContent>
							</ListItem>

							<ListItem>
								<ListItemContent style ={{fontSize: '25px', fontFamily: 'Anton', justifyContent: 'right'}}>
									<i className = "fa fa-envelope-square" aria-hidden="true"/>
										Tcarr204@gmail.com
								</ListItemContent>
							</ListItem>

							<ListItem>
								<ListItemContent style ={{fontSize: '25px', fontFamily: 'Anton', justifyContent: 'right'}}>
									<i className = "fa fa-linkedin-square" aria-hidden="true"/>
									{/*Linkedin*/}
									<a href="https://www.linkedin.com/in/anthony-carr-161678152" rel="noopener noreferrer" target="_blank">
										Linkedin Profile
									</a>
								</ListItemContent>
							</ListItem>


							</List>
						</div>
					</Cell>

				</Grid>
			</div>
		)

	}

}

export default Contact;
