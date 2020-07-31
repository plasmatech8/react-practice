import React from 'react';
import { Grid, Box } from '@material-ui/core'

import Header from './Header'
import Content from './Content'

function App() {
  return (
    <div className="App">


      <Grid container direction="column">
        <Grid item>
          <Box /* bgcolor='blue' */><Header /></Box>
        </Grid>
        <Grid item container>
          <Grid item xs={null} sm={1} md={2} />
          <Grid item xs={12} sm={10} md={8}><Box /* bgcolor='red' */><Content /></Box></Grid>
          <Grid item xs={null} sm={1} md={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
