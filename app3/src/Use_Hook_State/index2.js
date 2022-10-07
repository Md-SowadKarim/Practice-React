import React,{useState} from 'react'

export default function Use_Hook_State2() {
   const [count,setCount]= useState(0)
 const handleclick=()=>{
       setCount(count+1)
    }
  return (
    <div>
      <div>
        <h1>count :{count}</h1>
       <button onClick={handleclick}>click</button>
      </div>
    </div>
  )
}
