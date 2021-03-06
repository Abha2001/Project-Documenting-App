import React, { Component } from 'react'
import {signIn} from '../../store/action/authAction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state={
        email:'',
        password:'',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const {authError,auth}=this.props
        if (auth.uid)
        return <Redirect to="/" />
        return (
            <div className="container">
                <form onSubmit ={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <button className="btn pink">Sign In</button>
                    <div className="red-text center">
        {authError?<p>{authError}</p>:null}
                    </div>
                </form>
                
            </div>
        )
    }
}

const MapStateToProps=(state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signIn:(credentials)=>dispatch(signIn(credentials))
    }
}

export default connect(MapStateToProps,mapDispatchToProps)(SignIn)
