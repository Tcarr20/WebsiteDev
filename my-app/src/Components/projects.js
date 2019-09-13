import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card,CardTitle, CardActions,CardText, Button, CardMenu, IconButton} from 'react-mdl';
import MyAvatar from '../AvatarCropped600.png'

class Projects extends Component{
	constructor(props){
		super(props);
		this.state = {activeTab : 0};

	}

toggleCategories(){
	if(this.state.activeTab === 0){ {/* Unreal Projects*/}
		return(
			<div className="projects-grid">
				{/* Project 1 */}
				<Card shadow={5} style={{minWidth: '450',margin: 'auto'}}>
					<CardTitle style ={{color: '#237A57',align: 'center', height: '176px', background: 'url(https://www.sccpre.cat/mypng/detail/18-189103_unreal-engine-logo-png-png-download-transparent-unreal.png) center / cover'}} > Unreal Project #1</CardTitle>
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

				{/* Project 2 */}
				<Card shadow={5} style={{minWidth: '450',margin: 'auto'}}>
					<CardTitle style ={{color: '#237A57',align: 'center', height: '176px', background: 'url(https://www.sccpre.cat/mypng/detail/18-189103_unreal-engine-logo-png-png-download-transparent-unreal.png) center / cover'}} > Unreal Project #1</CardTitle>
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

	}else if (this.state.activeTab === 1) { {/* GameMaker Projects*/}
		return(
			<div className="projects-grid">
				{/* Project 1 */}
				<Card shadow={5} style={{minWidth: '450',margin: 'auto'}}>
					<CardTitle style ={{color: '#237A57',align: 'center', height: '176px', background: 'url(https://www.sccpre.cat/mypng/detail/18-189103_unreal-engine-logo-png-png-download-transparent-unreal.png) center / cover'}} > Unreal Project #1</CardTitle>
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

				{/* Project 2 */}
				<Card shadow={5} style={{minWidth: '450',margin: 'auto'}}>
					<CardTitle style ={{color: '#237A57',align: 'center', height: '176px', background: 'url(https://www.sccpre.cat/mypng/detail/18-189103_unreal-engine-logo-png-png-download-transparent-unreal.png) center / cover'}} > Unreal Project #1</CardTitle>
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
	}else if (this.state.activeTab === 2) { {/* Other Projects*/}
		return(
			<div><h1>This is Other</h1></div>
		)
	}else if (this.state.activeTab === 3) { {/* React Projects*/}
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
					 	<Tab>Unreal Enigne</Tab>
					 	<Tab>GameMaker Studio</Tab>
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
