import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Toolbar, Avatar } from '@material-ui/core';


const SignedOutLinks = () => {
  return (
    <>
      <Button><Link to='/signup'>Signup</Link></Button>
      <Button><Link to='/signin'>Login</Link></Button>
    </>
  );
}

export default SignedOutLinks;