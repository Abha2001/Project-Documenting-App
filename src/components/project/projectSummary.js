import React from 'react'
import moment from 'moment'

const ProjectSummary=({project})=>
{
    return(
        <div className="card project-summary">
                <div className="card-content grey-text-darken-3">
                <span className="card-title pink-text"> {project.title} </span>
                    <h6 className="blue-text text-darken-1">Posted by {project.authorFirstName} {project.authorLastName}</h6>
                    <p className="grey-text note-time">{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
    )
} 

export default ProjectSummary