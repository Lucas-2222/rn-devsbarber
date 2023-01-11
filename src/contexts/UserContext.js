import React, { createContext, useReducer } from "react";
import { inicialState, UseReducer } from '../reducers/UserReducer';

export const UserContext = createContext();

export default ({children}) => {
    const [state, dispatch] = useReducer(UseReducer, inicialState);

    return (
        <UserContext.Provider value={{stado, setStado}}>
            {children}
        </UserContext.Provider>
    );

}