import React, { Component } from 'react'
import Clock from '../presentation/Clock';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class Timer extends Component {

  componentWillMount() {
    this.props.start(this.startHandler);
    this.props.stop(this.stopHandler);
  }

  startHandler = () => {
    this.props.toggleCounting();
    this.interval = setInterval(() => this._tick(), 100);
  }

  _tick = () => {

    let millis = this.props.time.millis + 1;
    let seconds = this.props.time.seconds;
    let minutes = this.props.time.minutes;

    if (millis === 10) {
      millis = 0;
      seconds = seconds + 1;
    }

    if (seconds === 60) {
      millis = 0;
      seconds = 0;
      minutes = minutes + 1;
    }

    this.props.tick({
      millis: millis,
      seconds: seconds,
      minutes: minutes
    })
  }

  stopHandler = () => {
    this.props.toggleCounting();
    clearInterval(this.interval);
  }

  render() {
    return (
      <Clock time={this.props.time.str} />
    )
  }
}



const mapStateToProps = (state) => {
  return {
    time: state.time
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    tick: (time) => dispatch({type: actionTypes.TICK, time:time}),
    start: (startHandler) => dispatch({type: actionTypes.START, handler: startHandler}),
    stop: (stopHandler) => dispatch({type: actionTypes.STOP, handler: stopHandler}),
    reset: () => dispatch({ type: actionTypes.RESET }),
    toggleCounting: () => dispatch({ type: actionTypes.TOGGLE_COUNTING })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);