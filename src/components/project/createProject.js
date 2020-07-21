import React, { Component } from 'react'
import Create from '../../store/action/projectAction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class CreateProject extends Component {
    state={
        title:'',
        content:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
    render() {
        const {auth}= this.props
        if (!auth.uid)
        return <Redirect to="/signin" />
        return (
            <div className="container">
                <form onSubmit ={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}/>
                    </div>
                    <button className="btn pink">Create</button>
                </form>
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        auth:state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createProject:(project)=>dispatch(Create(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
