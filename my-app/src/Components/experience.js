import React, { Component } from 'react';
import {Grid,Cell, List, ListItem} from 'react-mdl';
class Experience extends Component{
	render(){
		return(
      <Grid>
        <Cell col ={4}>
        <p>{this.props.startYear} - {this.props.endYear} </p>

        </Cell>

        <Cell col={8}>
        <h4 style= {{marginTop:'0px'}}>{this.props.jobName}</h4>
				<h5>{this.props.jobLocation} </h5>
        <p>{this.props.jobDescription} </p>
					<div className = "exp-list">
						{!!(this.props.jobList1)?<p>{(this.props.jobList1)}</p>:""}
						<ul>
							{!!(this.props.jobList2)?<li>{(this.props.jobList2)}</li>:""}
							{!!(this.props.jobList3)?<li>{(this.props.jobList3)}</li>:""}
							{!!(this.props.jobList4)?<li>{(this.props.jobList4)}</li>:""}
							{!!(this.props.jobList5)?<li>{(this.props.jobList5)}</li>:""}
							{!!(this.props.jobList6)?<li>{(this.props.jobList6)}</li>:""}
						</ul>
					</div>
        </Cell>
      </Grid>

		)

	}

}

export default Experience;
