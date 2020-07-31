import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Avatar, Typography } from '@material-ui/core';


const SignedInLinks = () => {
  return (
    <>
      <Button component={Link} to='/create'><Typography>New Project</Typography></Button>
      <Button component={Link} to='/logout'>Log Out</Button>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </>
  );
}

export default SignedInLinks;