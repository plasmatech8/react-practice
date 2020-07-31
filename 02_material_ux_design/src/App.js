import React from 'react';
import './App.css';
import {
  AppBar, Toolbar, IconButton, Typography, Button, Grid, Box
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <div className="App">
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}

      <Grid container direction="column">
        <Grid item>
          <Box bgcolor='blue'>APP BAR</Box>
        </Grid>
        <Grid item container>
          <Grid item xs={null} sm={2} />
          <Grid item xs={12} sm={8}><Box bgcolor='red'>CONTENT</Box></Grid>
          <Grid item xs={null} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
