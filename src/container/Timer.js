import React, { Component } from 'react'
import { Grid, Divider} from '@material-ui/core'
import Clock from '../presentation/Clock';
import ControlBtn from '../presentation/ControlBtn';
import TimerContext from '../context/TimerContext';

export default class Timer extends Component {

  static contextType = TimerContext;
  
  state = {
    minutes: 0,
    seconds: 0,
    millis: 0,
    isCouting: false
  }

  startHandler = () => {
    if (!this.state.isCouting) {
      this.interval = setInterval(() => this._tick(), 100);
      this.setState({ isCouting: true });
    }
  }

  stopHandler = () => {
    if (this.state.isCouting) {
      clearInterval(this.interval);
      this.setState({ isCouting: false })
    }
  }

  resetHandler = () => {
    this.stopHandler();
    this._update(0,0,0);
  }

  saveHandler = () => {
    this.context.timeStr = this._getTime();
    this.context.pushToArray();
  }

  _tick() {

    let millis = this.state.millis + 1;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    if (millis === 10) {
      millis = 0;
      seconds = seconds + 1;
    }
    
    if (seconds === 60) {
      millis = 0;
      seconds = 0;
      minutes = minutes + 1;
    }

    this._update(minutes, seconds, millis);
  }

  _update(minutes, seconds, millis) {

    this.setState({
      millis: millis,
      seconds: seconds,
      minutes: minutes
    });
  }

  _getTime() {
    return this._zeroPad(this.state.minutes) + ':' + this._zeroPad(this.state.seconds) + ':' + this._zeroPad(this.state.millis);
  }
  
  _zeroPad(value) {
    return (value < 10) ? `0${value}` : value;
  }

  render() {
    return (
        <Grid container className="fullScreen">
          <Clock time={this._getTime()} />
          <ControlBtn time={this._getTime()}
                      state={this.state.isCouting} 
                      start={this.startHandler} 
                      stop={this.stopHandler}
                      reset={this.resetHandler}
                      save={this.saveHandler} />
          
          <Divider style={{ width: 100, margin: 'auto' }} />
        </Grid>
    )
  }

}
