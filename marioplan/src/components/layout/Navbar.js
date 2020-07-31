import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" classes={classes.title} component={Link} to='/'>
          MarioPlan
        </Typography>
        <SignedInLinks />
        <SignedOutLinks />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;