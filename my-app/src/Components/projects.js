import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card,CardTitle, CardActions,CardText, Button, CardMenu, IconButton} from 'react-mdl';

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
			<div><h1>This is React</h1></div>
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
