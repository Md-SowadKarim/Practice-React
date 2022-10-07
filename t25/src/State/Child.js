import React from 'react'

export default function Child(props) {
    const data2="i am from child"
    props.onchild(data2)
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  )
}
