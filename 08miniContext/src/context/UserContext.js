// step 1:- This is context creation. context is like global container of state, var, methods.

import React, { createContext } from "react";

const UserContext= createContext()

export default UserContext;

// The state + function can be passed in a context together as an object.