import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

const ProjectDetails=(props)=>{
    const {project,auth}=props;
    if (!auth.uid)
        return <Redirect to="/signin" />
    if (project){
        return(
            <div className="container section project-details">
                <div className="card">
                    <div className="card-content">
        <div className="card-title">{project.title}</div>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="center">Loading</div>
        )
    }
    }

const mapStateToProps=(state,ownProps)=>{
    const id= ownProps.match.params.project_id;
    const projects=state.firestore.data.Project
    const project=projects?projects[id]:null
    return{
        project,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'Project'}
    ]),
)(ProjectDetails)