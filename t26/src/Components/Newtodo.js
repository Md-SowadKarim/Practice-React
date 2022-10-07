import React,{useState} from 'react'

const Newtodo = (props) => {

    const[todo,setTodo]=useState("")
 const handleinput=(e)=>{
    setTodo(e.target.value)
 }
 const hanldesubmit=(e)=>{
    e.preventDefault();
  props.handletodo(todo)

 }

  return (
    <form style={{margin:"10px"}} onSubmit={hanldesubmit}>
        
        <label>New Todo</label>
        <div>
        <input type="text" id='todo' name='todo' value={todo} onChange={handleinput}></input>
        <button style={{margin:"10px"}}>Add Todo</button>
        </div>
       
    </form>
  )
}

export default Newtodo
