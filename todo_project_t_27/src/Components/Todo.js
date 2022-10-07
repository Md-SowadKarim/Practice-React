import React from 'react'
import style from './todo.module.css'

export default function Todo(props) {
    const{tittle,desc,id}=props.todo
  return (
    <div>
      <h1 className={style.des}>{tittle}</h1>
      <p>{desc}</p>
      <button className={style.btn}> Delete </button>
    </div>
  )
}
