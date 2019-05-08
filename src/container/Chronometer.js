import React, { Component } from 'react'
import { Grid, Divider } from '@material-ui/core';
import Timer from './Timer';
import Controls from './Controls';

class Chronometer extends Component {
  render() {
    return (
      <Grid container className="fullScreen">
        <Timer/>
        <Controls/>
        <Divider style={{ width: 100, margin: 'auto' }} />
      </Grid>
    )
  }
}

export default Chronometer;