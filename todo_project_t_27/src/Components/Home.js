import React from 'react'
import Newtodo from './Newtodo'
import Todos from './Todos'

export default function Home() {
    const dummytodos=[
        {
            id : 1,
            tittle: "home",
            desc :"this is first home"
        },
        {
            id : 2,
            tittle: "office",
            desc :"this is first office"
        }
    ]
  return (
    <div>
        <Newtodo />
      <Todos todos={dummytodos} />
    </div>
  )
}
