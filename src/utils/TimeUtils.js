const formatTime = (min, sec, mil) => {
  return zeroPad(min) + ':' + zeroPad(sec) + ':' + zeroPad(mil);
}

const zeroPad = (value) => {
  return (value < 10) ? `0${value}` : value;
}

export default formatTime;