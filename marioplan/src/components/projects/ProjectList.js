import React from 'react'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {

  const projectCards = projects && projects.map(project => {
    return (
      <ProjectSummary key={project.id} project={project} />
    )
  });

  return (
    <div className="project-list section">
      <div className="card z-depth-1 project-summary">
        {projectCards}
      </div>
    </div>
  )
}

export default ProjectList
