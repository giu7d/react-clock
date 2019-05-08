import React, { Component } from 'react'
import ControlBtn from '../presentation/ControlBtn';
import FirebaseService from '../services/FirebaseServices';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class Controls extends Component {
  
  routeHistoryHandler = () => {
    this.props.history.push('/history');
  }

  saveHandler = () => {

    FirebaseService.post(
      'times', 
      { time: this.props.time.str },
      res => console.log(res));
  }


  render() {
    return (
          <ControlBtn time={this.props.time.str}
                      state={this.props.isCounting}
                      start={this.props.start} 
                      stop={this.props.stop}
                      reset={this.props.reset}
                      save={this.saveHandler}
                      history={this.routeHistoryHandler} />
    )

  }
}

const mapStateToProps = (state) => {
  return {
    time: state.time,
    isCounting: state.isCounting,
    start: state.start,
    stop: state.stop
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch({ type: actionTypes.RESET })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Controls));