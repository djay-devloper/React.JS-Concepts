// This is the way of passing different values, states, functions to a context.

import React, { Children } from "react";
import UserContext from "./UserContext";

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