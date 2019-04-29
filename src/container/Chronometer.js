import React, { Component } from 'react'
import { Grid, Divider} from '@material-ui/core'
import Clock from '../presentation/Clock';
import ControlBtn from '../presentation/ControlBtn';


export default class Chronometer extends Component {

  render() {
    return (
      <Grid container className="fullScreen">
        <Clock time="00:00:00" />
        <ControlBtn state={false} />
        <Divider style={{ width: 100, margin: 'auto' }} />
      </Grid>
    )
  }

}
