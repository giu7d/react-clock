import React from 'react'
import { Paper, Grid } from '@material-ui/core'




const clock = (props) => {

  const { time } = props

  return (
    <Grid item xs={12}>
      <Paper className="Clock">
        <code>{ time }</code>
      </Paper>
    </Grid>
  )
}

export default clock;