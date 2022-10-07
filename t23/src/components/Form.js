import React, { useState } from "react"
//import stl from "../index.css"
//import style from'./module.frm.css'

function Form (){
   // const[name,setName]=useState('')
   // const[email,setEmail]=useState('')
   // const[password,setPassword]=useState('')
   const[user,setUser]=useState({name:"",email:"",password:""})
   const{name,email,password}=user

    // let userinfo={
    //     name:name,
    //     email:email,
    //     password:password
    // }
    const handlechange=(e)=>{
     // const filename=  e.target.name;
    //   if (filename==='name'){
    //     setUser({name:e.target.value,email,password})
    //   }else if(filename==='email'){
    //     setUser({name,email:e.target.value,password})
    //   }else{
    //     setUser({name,email,password:e.target.value})
    //   }

    //============== spread operator ===================
    setUser({...user,[e.target.name]:e.target.value})
    }

    // const handlenamechange=(e)=>{
    //     setUser({name:e.target.value,email,password})
    // }
    // const handleemailchange=(e)=>{
    //     setUser({name,email:e.target.value,password})
    // }
    // const handlepasschange=(e)=>{
    //     setUser({name,email,password:e.target.value})
    //}
    const handlesubmit=(e)=>{
        console.log(user)
        e.preventDefault()
    }
     return (
        <div>
            <h1 >Regestration</h1>
            <form onSubmit={handlesubmit}>
                <div style={{margin:"10px"}}>
                <label>name :</label>
                <input type="text" name='name' id='name'value={name} required onChange={handlechange}></input>
                </div>
                <div style={{margin:"10px"}}>
                <label>email :</label>
                <input type="email" name='email' id='email' value={email} required onChange={handlechange}></input>  
                </div>
                <div style={{margin:"10px"}} >
                <label>password :</label>
                <input type="password" name='password' id='password'value={password} required onChange={handlechange}></input>  
                </div>
                <div>
                    <button > regester </button>
                </div>
                
            </form>
           
        </div>
    )
 }

export default Form;