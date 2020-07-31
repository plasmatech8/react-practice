import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  title: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>This is our AppBar</Typography>
        <AcUnitIcon className={classes.icon} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
