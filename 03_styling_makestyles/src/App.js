import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import classnames from 'classnames';

const useStyles = makeStyles(theme => ({
  buttonStyle: {
    color: 'blue'
  },
  textStyle: {
    color: 'blue'
  },
  dynamicButtonStyle: {
    color: props => props.cool ? 'green' : 'purple'
  },
  dynamicButtonStyle2: props => { // Entire style depends on props
    return {
      color: props.cool ? 'green' : 'purple',
      backgroundColor: props.cool ? 'yellow' : 'pink',
      [theme.breakpoints.up("sm")]: { // At sm and above, color is blue
        color: "blue"
      },
    }
  },
  multiClass1: {
    color: "cyan"
  },
  multiClass2: {
    backgroundColor: "blue"
  }
}));

function App(props) {
  const classes = useStyles(props);
  console.log(classes);
  return (
    <>
      <p>
        <Button className={classes.buttonStyle}>Our first button</Button>
        <Button variant="outlined" color="secondary" >Our first button</Button>
      </p>
      <p>
        <Typography className={classes.textStyle}>Our first typo</Typography>
        <Typography variant="h6" color="secondary">Our first typo</Typography>
      </p>
      <p>
        <Box p={2}>
          <Button fullWidth className={classes.dynamicButtonStyle2}>
            Our button that changes the style based on props.
        </Button>
        </Box>
      </p>

      <p>
        <Box p={2}>
          <Button fullWidth className={classnames(classes.multiClass1, classes.multiClass2)}>
            Our button with multiple classes.
        </Button>
        </Box>
      </p>
    </>
  );
}

export default App;
