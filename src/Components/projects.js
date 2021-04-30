import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card,CardTitle, CardActions,CardText, Button, CardMenu, IconButton} from 'react-mdl';
import MyAvatar from '../AvatarCropped600.png'
import VirSubPar from '../VirSubPar1.gif'

class Projects extends Component{
	constructor(props){
		super(props);
		this.state = {activeTab : 0};

	}

toggleCategories(){
	if(this.state.activeTab === 0){ {/* Game Projects*/}
		return(
			<Grid className="projects-grid" style = {{display: 'flex', justifyContent: 'center'}}>
				{/* Project 1 */}
				<Card shadow={5} style={{minWidth: '450px',margin: '1em', display: 'flex', justifyContent: 'center'}}>
					<CardTitle style ={{color: 'white',align: 'center', height: '176px', background: 'url(https://img.itch.zone/aW1hZ2UvMzE3MDc2LzE1NjE2MDMucG5n/original/pN%2BEPb.png) center / cover'}} >Fields of Flux</CardTitle>
					<CardText>
						Game Jam Project for "Chillennium Game Jam" 2018. Won best in design. I did the effects programming, such as the bloom and grapple mechanics. Mainly acted as design lead.
					</CardText>
					<CardActions border>
						<a href="https://github.com/Tcarr20/FieldsofFlux" rel="noopener noreferrer" target="_blank">
						<Button colored ripple>GitHub </Button>
						</a>
						<a href="https://idomybest.itch.io/fields-of-fluxx" rel="noopener noreferrer" target="_blank">
						<Button colored ripple>Itch.io</Button>
						</a>
					</CardActions>
				</Card>

				{/* Project 2 */}
				<Card shadow={5} style={{minWidth: '450px',margin: '1em', display: 'flex'}}>
					<CardTitle style ={{color: 'white',align: 'center', height: '176px', background: 'url(https://img.itch.zone/aW1hZ2UvNDQ2NTQ4LzIyNTQ1ODYuZ2lm/347x500/XoqNGE.gif) center / cover'}} >BallPit</CardTitle>
					<CardText>
						Built in Unreal Engine 4, for my Game Programming 4250 course at UNT. I built a gravity defying Client-Server network for rolling around and shooting each other.
					</CardText>
					<CardActions border>
						<a href="https://github.com/Tcarr20/BallPit" rel="noopener noreferrer" target="_blank">
						<Button colored ripple>GitHub </Button>
						</a>
						<a href="https://idomybest.itch.io/ballpit" rel="noopener noreferrer" target="_blank">
						<Button colored ripple>Itch.io</Button>
						</a>
					</CardActions>
				</Card>

				{/* Project 3 */}
				<Card shadow={5} style={{minWidth: '450px',margin: '1em', display: 'flex'}}>
					<CardTitle style ={{color: 'white',align: 'center', height: '176px', background: 'url(https://img.itch.zone/aW1hZ2UvMTg0MjIwLzg2MTk1Ni5wbmc=/347x500/vWygpb.png) center / cover'}} >Good Cop Rad Cop</CardTitle>
					<CardText>
						Game Jam Project for "Chillennium Game Jam" 2017. I was the lead programmer for this game. I created simple AI, and procedural generation of obstacles.
					</CardText>
					<CardActions border>
						<a href="https://certly.itch.io/good-cop-rad-cop" rel="noopener noreferrer" target="_blank">
						<Button colored ripple>Itch.io</Button>
						</a>
					</CardActions>
				</Card>

				{/* Project 4 */}

				<Card shadow={5} style={{minWidth: '450px',margin: '1em', display: 'flex'}}>
					<CardTitle style ={{color: 'white',align: 'center', height: '176px', background: 'url('+VirSubPar+') center / cover'}} >Virtually SubPar</CardTitle>
					<CardText>
						This was built in directX 12 for Game Programming 4110 at UNT, with a library provided by our instructor. I personally built the collision algorithm and rendering algorithm for this 2D mini golf brawler.
					</CardText>
					<CardActions border>
						<a href="https://github.com/Tcarr20/virtuallySubPar" rel="noopener noreferrer" target="_blank">
						<Button colored ripple>GitHub</Button>
						</a>
					</CardActions>
				</Card>

				</Grid>


		)

	}else if (this.state.activeTab === 1) { {/* other Projects*/}
		return(
			<Grid className="projects-grid">
				{/* Project 1 */}
				<Card shadow={5} style={{minWidth: '450',margin: 'auto'}}>
					<CardTitle style ={{color: '#ffffff',align: 'center', height: '176px', background: 'url(https://img.itch.zone/aW1nLzU4MjM5NzEucG5n/original/cYrMpB.png) center / cover'}} > Midi_midi</CardTitle>
					<CardText>
						A Team and I created a Digital Audio Workstation, We are using QT as our framework. I am creating the (close to real time*) sound synthesizer backend.
					</CardText>
					<CardActions border>
					<a href="https://idomybest.itch.io/midi-midi" rel="noopener noreferrer" target="_blank">
						<Button colored ripple>Itch.io</Button>
						</a>

					<a href="https://github.com/Tcarr20/Midi_midiArchive" rel="noopener noreferrer" target="_blank">
						<Button colored ripple>GitHub </Button>
						</a>
					</CardActions>
					<CardMenu style = {{color: '#237A57'}}>
					</CardMenu>
				</Card>
			</Grid>
		)
	}else if (this.state.activeTab === 2) { {/* React Projects*/}
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
							<h1> This website was built by me!</h1>
							<hr/>

						<p> I built this website using React-mdl. I hope you like it as much as I liked building it.</p>
						</div>
						<p style ={{color: 'white'}}>
						It's scalable too try moving the window around!
						</p>

					</Cell>

				</Grid>
			</div>
		)
	}
}


	render(){
		return(
			<div className="category-tabs">
				 <Tabs activeTab ={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
					 	<Tab>Games</Tab>
					 	<Tab>Other</Tab>
					 	<Tab>React</Tab>
				 </Tabs>



							<div classname="content" >
							{this.toggleCategories()}
							</div>

					</div>



		)

	}

}

export default Projects;
