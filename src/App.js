import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Fab, Typography, Divider, List, ListItem } from '@material-ui/core'
import { AlarmOutlined, Done, HistoryOutlined } from '@material-ui/icons';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    lineHeight: 9,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class App extends Component {
  
  render() {

    const { classes } = this.props;

    return (
      <div className="App">
        
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <code>00:00:00</code>
            </Paper>
          </Grid>
        </Grid>

        <Grid container style={{marginTop: 100, marginBottom: 75 }}>
          

          <Grid item xs={4} style={{ textAlign: 'right'}}>
            <Fab  size="medium"
                  color="primary" 
                  aria-label="X">
                  +5
            </Fab>
          </Grid>

          <Grid item xs={4} style={{ textAlign: 'center'}}>
            <Fab  size="large"
                  color="secondary" 
                  aria-label="Start Count" 
                  className="start">
              <AlarmOutlined />              
            </Fab>
          </Grid>

          <Grid item xs={4} style={{ textAlign: 'left'}}>
            <Fab  size="medium"
                  aria-label="Y">
                  <Done />
            </Fab>
          </Grid>

        </Grid>

        <Divider style={{ width: 100, margin: 'auto' }} />

        <Grid container style={{marginTop: 25}} justify="center">
          <Grid item xs={10}>
            <Typography component="h2" 
                        variant="display1" 
                        gutterBottom>
            <HistoryOutlined /> Histórico
            </Typography>
            <List>
              <ListItem>00:00:00</ListItem>
            </List>
          </Grid>
        </Grid>

      </div>
    )
  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);
