import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';


const SignedInLinks = () => {
  return (
    <>
      <Button><NavLink to='/create'>New Project</NavLink></Button>
      <Button><NavLink to='/logout'>Log Out</NavLink></Button>
      <Button><NavLink to='/profile' className='btn btn-floating pink lighten-1'>NN</NavLink></Button>
    </>
  );
}

export default SignedInLinks;