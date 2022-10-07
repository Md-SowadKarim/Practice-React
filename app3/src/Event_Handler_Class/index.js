import React, { Component } from 'react'

 class Event_Handler_Class extends Component {
   constructor(props){
    super(props)
        this.state= {
                changevalue :""
        }
    
   }


handleclick=()=>{
    console.log(this.state.changevalue)
}

handleinput=(e)=>{
 //   console.log(e.target.value)
 this.setState({
    changevalue : e.target.value
 })
    
}


  render() {
    return (
      <div>
        <input type="text" onChange={this.handleinput}></input>
      <button onClick={this.handleclick}>click</button>
      <p>{this.state.changevalue}</p>
      </div>
    )
  }
}


export default Event_Handler_Class;