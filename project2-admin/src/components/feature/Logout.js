import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom';

const Logout = () => {

  

  useEffect(()=>{
    localStorage.removeItem("admin-token");
  
    // redirect to login page
  },[])

  return (
    <Navigate to="/" />
  )
}

export default Logout
/*

  Component --- Block of HTML saperated code, whic is used anywhere.
              and every compoent should return a JSX code.

*/