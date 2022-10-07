import React, { Component } from "react";
import HOME from './home'
import Login from './login'
class State extends Component{

    constructor(props){
        super(props)
        this.state={
            isloggedIn:false
        }
    }

    render(){

        const {isloggedIn}=this.state;
       // let element=isloggedIn? <HOME /> : <Login />
        return(
            <div>
             {isloggedIn? <HOME /> : <Login />}
            </div>
        )
    }
}export default State;