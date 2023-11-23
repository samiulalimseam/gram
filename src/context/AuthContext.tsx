import { createContext, useState } from "react";
import { IContextType } from "@/types";

export const INITIAL_USER = {
    id: '',
    name : '',
    username : '',
    imageUrl : '',
    bio : ''
} ;

const INITIAL_STATE = {
    user: INITIAL_USER ,
    isLoading : false,
    isAuthenticated : false ,
    setUser : () => {},
    setIsAuthenticated :async () => false as boolean,
}

const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({children}) => {
    
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;