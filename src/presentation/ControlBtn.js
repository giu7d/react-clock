import React from 'react'
import { Grid, Fab } from '@material-ui/core'
import { Alarm, Stop, Loop, FavoriteBorder } from '@material-ui/icons';

const controlBtn = (props) => {
	
	const { state, time } = props;

	const start = (
		<Fab  size="large"
					color="primary" 
					aria-label="Start Count" 
					className="start"
					onClick={props.start}>
			<Alarm />              
		</Fab>
	);

	const stop = (
		<Fab  size="large"
					color="secondary" 
					aria-label="Stop Count" 
					className="start"
					onClick={props.stop}>
			<Stop />              
		</Fab>
	);
	
	const reset = (
		<Fab  size="medium"
					color="secondary" 
					aria-label="Reset Count" 
					className="start"
					onClick={props.reset}>
			<Loop />              
		</Fab>
	);

	const save = (
		<Fab  size="medium"
					aria-label="Start Count" 
					className="danger"
					onClick={props.save}>
			<FavoriteBorder />              
		</Fab>
	);
	
	return (
    <Grid container justify="center">
    	<Grid item xs={4} className="ControlBtn">
				{(time !== '00:00:00') ? reset : null }
			</Grid>
			<Grid item xs={4} className="ControlBtn">
				{(state) ? stop : start }
			</Grid>
    	<Grid item xs={4} className="ControlBtn">
			 {(time !== '00:00:00') ? save : null} 
			</Grid>

    </Grid>
  )
}

export default controlBtn;