import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
