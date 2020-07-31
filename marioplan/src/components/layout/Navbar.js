import React from 'react';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { AppBar, Toolbar, Typography } from '@material-ui/core'

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        < Link to='/'><Typography variant="h6" className="h6">
          News
    </Typography></Link>
        <SignedInLinks />
        <SignedOutLinks />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;