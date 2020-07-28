import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/project/:id' component={ProjectDetails}></Route>
          <Route component={() => <p>Page not found</p>}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
