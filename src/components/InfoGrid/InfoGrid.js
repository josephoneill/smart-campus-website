import React from 'react';
import InfoItem from './InfoItem';
import Grid from '@material-ui/core/Grid';

import './InfoGrid.css';
import info_item_1 from '../../assets/website-logo.svg';
import info_item_2 from '../../assets/pin-logo.svg';
import info_item_3 from '../../assets/sliders-logo.svg';

function InfoGrid() {	
  return (
	<Grid container spacing={3}>
		{/** TODO: Put in .json and map */}
		<Grid item xs className="info-grid-item">
			<InfoItem title="Title 1" image={info_item_1}/>
		</Grid>

		<Grid item xs className="info-grid-item">
			<InfoItem title="Title 2" image={info_item_2}/>
		</Grid>

		<Grid item xs className="info-grid-item">
			<InfoItem title="Title 3" image={info_item_3}/>
		</Grid>

	</Grid>
  );
}

export default InfoGrid;
