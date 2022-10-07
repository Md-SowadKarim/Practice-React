import React, { Component } from 'react'

class Use_Hook_State extends Component {
constructor(props){
  super(props)
  this.state={
    count : 0
  }
}
handleclick=()=>{

  this.setState({
    count : this.state.count+1
  })
}


  render() {
    return (
      <div>
       
        <h1>count : {this.state.count}</h1>
        <button onClick={this.handleclick}>click</button>
      </div>
    )
  }
}

export default Use_Hook_State;