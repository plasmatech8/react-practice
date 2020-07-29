import React, { Component } from 'react'
import { connect } from 'react-redux'

import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'


class Dashboard extends Component {
  render() {
    const { projects } = this.props; // Set by mapStateToProps
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { projects: state.project.projects } // Obtained from provider store
}

export default connect(mapStateToProps)(Dashboard)
