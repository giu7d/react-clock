import React, { Component } from 'react'
import { Grid, Typography, List, ListItem, IconButton } from '@material-ui/core'
import { HistoryOutlined, ArrowBackIos } from '@material-ui/icons';
import FirebaseService from '../services/FirebaseServices';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class History extends Component {

  componentDidMount() {

    FirebaseService.get('times', res => {
      
      const dataArray = res.map(el => el.data.time);
      // const list = [...this.props.items]    
      // list.push(...dataArray);
      this.props.save(dataArray);

    });
  }
  
  navBackHandler = () => {
    this.props.history.goBack();
  }
 
  render() {
    return (
      <div>
        <Grid container
              justify="center">
          
          <Grid item xs={2}>
            <IconButton onClick={this.navBackHandler}>
              <ArrowBackIos />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Typography component="h2" 
                        variant="display1" 
                        gutterBottom>
            <HistoryOutlined /> Histórico
            </Typography>
          </Grid>
        </Grid>
        <Grid container
              justify="center">
          <Grid item xs={12}>  
            <List>
              {this.props.items.map((el, i) => <ListItem key={i}>{el}</ListItem>)}
            </List>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.time,
    items: [...state.items]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    save: (array) => dispatch({ type: actionTypes.SAVE, array: array })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(History);