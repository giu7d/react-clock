import React from 'react'
import { Grid, Fab } from '@material-ui/core'
import { AlarmOutlined, StopOutlined } from '@material-ui/icons';

const controlBtn = (props) => {
	
	const { state } = props;

	const start = (
			<Fab  size="large"
						color="primary" 
						aria-label="Start Count" 
						className="start">
				<AlarmOutlined />              
			</Fab>
	);

	const stop = (
			<Fab  size="large"
						color="secondary" 
						aria-label="Start Count" 
						className="start">
				<StopOutlined />              
			</Fab>
	);
	
	return (
    <Grid item xs={12} className="ControlBtn">
			{(state) ? start : stop } 
    </Grid>
  )
}

export default controlBtn;