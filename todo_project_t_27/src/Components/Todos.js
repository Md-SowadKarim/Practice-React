import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
    console.log(props.todos)
  return (
    <section>
        {props.todos.map((todo)=>(
            <Todo todo={todo} key={todo.id} />
        ))}
    </section>
  )
}
