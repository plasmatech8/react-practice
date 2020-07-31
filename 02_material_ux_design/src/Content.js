import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Core
import { Grid } from '@material-ui/core'

import data from './data'
import CoffeeCard from './CoffeeCard'

const useStyle = makeStyles(theme => ({
  gridPadding: {
    padding: '50px',
  },
}));


const Content = () => {
  const classes = useStyle();

  const coffees = data.map(coffee => {
    const { title, price, description, avatarUrl, imageUrl } = coffee;
    return (
      <Grid item xs={12} sm={6} md={4}>
        <CoffeeCard
          title={title}
          subtitle={price}
          description={description}
          avatarSrc={avatarUrl}
          imgSrc={imageUrl}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2} className={classes.gridPadding}>
      {coffees}
    </Grid>
  );
}

export default Content
