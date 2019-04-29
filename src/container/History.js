import React, { Component } from 'react'
import { Grid, Typography, List, ListItem } from '@material-ui/core'
import { HistoryOutlined } from '@material-ui/icons';



export default class History extends Component {
  render() {
    return (
      <Grid container 
            spacing={24}
            className="fullScreen"
            justify="center">
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
    )
  }
}
