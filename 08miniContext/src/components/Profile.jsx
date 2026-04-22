import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user}= useContext(UserContext)

    if(!user.username) return <p>Please Login</p>

    return(
        <div>
            <h1>WELCOME: {user.username}</h1>
        </div>
    )
}

export default Profile