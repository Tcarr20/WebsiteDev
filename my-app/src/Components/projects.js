import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card,CardTitle, CardActions,CardText, Button, CardMenu, IconButton} from 'react-mdl';
import MyAvatar from '../AvatarCropped600.png'

class Projects extends Component{
	constructor(props){
		super(props);
		this.state = {activeTab : 0};

	}

toggleCategories(){
	if(this.state.activeTab === 0){ {/* Game Projects*/}
		return(
			<div className="projects-grid">
				{/* Project 1 */}
				<Card shadow={5} style={{minWidth: '450',margin: 'auto'}}>
					<CardTitle style ={{color: 'white',align: 'center', height: '176px', background: 'url(https://img.itch.zone/aW1hZ2UvMzE3MDc2LzE1NjE2MDMucG5n/original/pN%2BEPb.png) center / cover'}} >Fields of Flux</CardTitle>
					<CardText>
						Game Jam Project for "Chillennium Game Jam" 2018. Won best in design. I did the effects programming, such as the bloom and grapple mechanics. Mainly acted as design lead.
					</CardText>
					<CardActions border>
						<a href="https://github.com/Tcarr20/FliedsOfFlux" rel="noopener noreferrer" target="_blank">
						<Button colored ripple>GitHub </Button>
						</a>
						<a href="https://idomybest.itch.io/fields-of-fluxx" rel="noopener noreferrer" target="_blank">
						<Button colored ripple>Itch.io</Button>
						</a>
					</CardActions>
				</Card>

				{/* Project 2 */}
				<Card shadow={5} style={{minWidth: '450',margin: 'auto'}}>
					<CardTitle style ={{color: 'white',align: 'center', height: '176px', background: 'url(https://img.itch.zone/aW1hZ2UvNDQ2NTQ4LzIyNTQ1ODYuZ2lm/347x500/XoqNGE.gif) center / cover'}} >Fields of Flux</CardTitle>
					<CardText>
						Built in Unreal Engine 4, for my Game Programming 4250 course at UNT. I built a gravity defying Peer-to-Peer network for rolling around and shooting each other.
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
				<Card shadow={5} style={{minWidth: '450',margin: 'auto'}}>
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

				</div>


		)

	}else if (this.state.activeTab === 1) { {/* other Projects*/}
		return(
			<div className="projects-grid">
				{/* Project 1 */}
				<Card shadow={5} style={{minWidth: '450',margin: 'auto'}}>
					<CardTitle style ={{color: '#237A57',align: 'center', height: '176px', background: 'url(https://pbs.twimg.com/media/D_yc0hcW4BAcxY1.png) center / cover'}} > Other Project</CardTitle>
					<CardText>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					</CardText>
					<CardActions border>
						<Button colored>GitHub</Button>
						<Button colored>Itch</Button>
					</CardActions>
					<CardMenu style = {{color: '#237A57'}}>
						<IconButton name="share"/>
					</CardMenu>
				</Card>
			</div>
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


				 	<Grid >
						<Cell col={12}>
							<div classname="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
			</div>


		)

	}

}

export default Projects;
