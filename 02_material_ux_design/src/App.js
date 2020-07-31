import React from 'react';
import { Grid, Box } from '@material-ui/core'

import Header from './Header'

function App() {
  return (
    <div className="App">


      <Grid container direction="column">
        <Grid item>
          <Box bgcolor='blue'><Header /></Box>
        </Grid>
        <Grid item container>
          <Grid item xs={null} sm={2} />
          <Grid item xs={12} sm={8}><Box bgcolor='red'>CONTENT</Box></Grid>
          <Grid item xs={null} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
