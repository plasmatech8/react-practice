import React, { Component } from 'react'

import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'


export class Dashboard extends Component {
  render() {
    return (
      <div clasName="dashboard">
        <div className="row">
          <div className="col s12 m6 red">
            <ProjectList />
          </div>
          <div className="col s12 m5 offset-m1 blue">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
