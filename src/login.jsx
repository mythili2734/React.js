import React, { useState } from 'react'

function login() {
    const[login,setlogin]=useState({name:"",Password:""})
    const[Submit, setSubmit]=useState({})
  return (
    <div>
        <h1>Login from</h1>
        <label>Name:</label>
            <input type="text" required onChange={(e)=>setlogin({...login,name:e.target.value})} />
            <label>Password</label>
            <input required type="password" onChange={(e)=>setlogin({...login,password:e.target.value})}/>
            <button onClick={(e)=>{setSubmit({...login})}}>Submit</button>
            <div>
                <h3>Hello  {Submit.name}</h3>
            </div>
            </div>
  )
}

export default login