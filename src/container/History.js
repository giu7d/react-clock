import React, { Component } from 'react'
import { Grid, Typography, List, ListItem } from '@material-ui/core'
import { HistoryOutlined } from '@material-ui/icons';
import TimerContext from '../context/TimerContext';


export default class History extends Component {

  static contextType = TimerContext;


  componentDidMount() {
    console.log('Mount');
    this.context.pushToArray = this.pushTime;
  }


  state = {
    items : []
  }


  log = () => {
    console.log(this.context);
    console.log(this.state);
  }

  pushTime = () => {
    const list = [...this.state.items]
    list.push(this.context.timeStr);
    
    this.setState({
      items: list
    });
  }

  render() {
    return (
      <Grid container 
            spacing={24}
            className="fullScreen"
            justify="center">
        <Grid item xs={10} onClick={this.log}>
          <Typography component="h2" 
                      variant="display1" 
                      gutterBottom>
          <HistoryOutlined /> Histórico
          </Typography>
          <List>
            {this.state.items.map((el, i) => <ListItem key={i}>{el}</ListItem>)}
          </List>
        </Grid>
      </Grid>
    )
  }
}
