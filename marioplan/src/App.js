import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/project/:id' component={ProjectDetails}></Route>
          <Route exact path='/signin' component={SignIn}></Route>
          <Route exact path='/signup' component={SignUp}></Route>
          <Route exact path='/create' component={CreateProject}></Route>
          <Route component={() => <p>Page not found</p>}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;