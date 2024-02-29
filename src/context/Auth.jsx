import React,{useContext,useEffect} from 'react'
import { Navigate } from "react-router";
import { UserContext } from "./user.context";

const Auth = ({children}) => {
    const {currentUser}= useContext(UserContext);
    if(currentUser===null)
    {
        return <Navigate to={"/login"}/>;
    }
  return (children);
}

export default Auth;