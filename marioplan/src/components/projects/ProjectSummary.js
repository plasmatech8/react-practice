import React from 'react'

const ProjectSummary = ({ project }) => {
  const { title } = project;
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>Posted by the Net Ninja</p>
        <p className="grey-text">3rd Sept</p>
      </div>
    </div>
  )
}

export default ProjectSummary
