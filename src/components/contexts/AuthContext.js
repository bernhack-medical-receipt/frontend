import { Context, useReducer } from "react";


export const AuthContext = createContext();

//TODO 
//in index js, make the wrapper that passes the roles-context to children components 

//1)on which level the auth context should be? (the upper one? like index.js)
//2)s