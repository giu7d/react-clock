import formatTime from '../utils/TimeUtils';
import * as actionTypes from './actions';

const initialState = {
  time: {
    minutes: 0,
    seconds: 0,
    millis: 0,
    str: '00:00:00'
  },
  items: [],
  isCounting: false,
  start: () => {},
  stop: () => {},
}


const reducer = (state = initialState, action) => {

  switch(action.type) {

    case actionTypes.TICK:

      return {
        ...state,
        time: {
          minutes: action.time.minutes,
          seconds: action.time.seconds,
          millis: action.time.millis,
          str: formatTime(action.time.minutes, action.time.seconds, action.time.millis)
        }
      }

    case actionTypes.START:
      return {
        ...state,
        start: action.handler
      }
    
    case actionTypes.STOP:
      return {
        ...state,
        stop: action.handler
      }

    case actionTypes.RESET:
      return {
        ...state,
        time: {
          minutes: 0,
          seconds: 0,
          millis: 0,
          str:'00:00:00'
        }
      }

    case actionTypes.SAVE:
      return {
        ...state,
        items: [...action.array]
      }

    case actionTypes.TOGGLE_COUNTING:
      return {
        ...state,
        isCounting: !state.isCounting
      }
    default:
      return state
  }
}

export default reducer;