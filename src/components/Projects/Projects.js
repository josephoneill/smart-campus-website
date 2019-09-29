import React from 'react';
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';

import './Projects.css';
import projectsList from '../../assets/projects.json';

function Project() {	
  return (
		<Grid container spacing={6} className="projects-grid">
			{projectsList.projects.map((e, i) => 
				<Grid item xs className="projects-grid-item">
					<ProjectCard key={i} projectName={e.title} projectImage={e.image} projectDesc={e.desc} />
				</Grid>
			)}
		</Grid>
  );
}

export default Project;
