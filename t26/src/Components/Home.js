import React,{useState} from 'react'
import Newtodo from './Newtodo'
import Todos from './Todos'

export default function Home() {
    const dummytodos=["todo1","todo2"]
    const [todo,setTodo]=useState(dummytodos)
    const handletodo=(tod)=>{
      setTodo([...todo,tod])
    }
  return (
    <div>
      <Todos todos={todo}  />
      <Newtodo handletodo={handletodo} />
    </div>
  )
}
