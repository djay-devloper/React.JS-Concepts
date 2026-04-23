// This is how we send data to context

import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){

    //setUser is a method which is available in UserContextProvider. In this way we are consuming it.
    const {setUser}= useContext(UserContext)

    const[username, setUsername]= useState("")
    const[password, setPassword]= useState("")


    const handleSubmit= (e)=> {
        e.preventDefault()
        setUser({username, password})
    }

    return(
        <div>
            <h2>Login page</h2>

            <input type="text"
              placeholder="usename"
              value={username}
              onChange={(e)=>{
                setUsername(e.target.value)
              }} />

            <input type="text"
              placeholder="password"
              value={password}
              onChange={(e)=> {
                setPassword(e.target.value)
              }} />

              <button onClick={handleSubmit} >Submit</button>  
        </div>
    )
}

export default Login