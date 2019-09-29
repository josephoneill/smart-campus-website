import React from 'react';
import Card from '@material-ui/core/Card'

import './ProjectCard.css';
import project_default_image from '../../../assets/project1.png';

function ProjectCard(props) {	
  return (
    <Card className="project-card">
    	<h2>{props.projectName}</h2>
    	<img src={require(`../../../assets/${props.projectImage}`)} alt="Project"/>
    	<div className="project-card-details">
				<p>
					{props.projectDesc}
				</p>
    		<a href="#">Find out more</a>
    	</div>
    </Card>
  );
}

ProjectCard.defaultProps = {
	projectName: "Project Name",
	projectImage: project_default_image,
	projectDesc: "Description of the project"     
}

export default ProjectCard;
