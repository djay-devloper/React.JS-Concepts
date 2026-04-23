//step 2:- Creating provider. This is the way of passing different values, states, functions to a context.

import React from "react";
import UserContext from "./UserContext";

// If we use children as parameter inside contextProvider, then whatever is enclosed under contextProvider can consume 
// this context. You can also enclose the specific components only like Login, Profile.
const UserContextProvider= ({children})=> {
    const [user, setUser]= React.useState({})

    return(
        <UserContext.Provider value= {{user, setUser}}>
          {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

// first of all I included a state user and a method setuser in the context UserContext.
// After that I send value to state {user} using login component.
// After that I consumed the value in Profile componenet.