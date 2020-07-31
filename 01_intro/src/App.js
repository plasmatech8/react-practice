import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import './App.css';

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique', // Add slant to text
    color: 'red',
    fontSize: '30px'
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography variant='h2' color='primary'>
        Hello Material-UI
      </Typography>
      <Typography className={classes.helloThereStyle}>
        Hello Material-UI
      </Typography>
      <Button variant="outlined" color="secondary"> Our first button</Button>
    </div>
  );
}

export default App;
