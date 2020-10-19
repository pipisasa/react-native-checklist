import React from 'react';
const { createContext } = require("react");

export const authContext = createContext(null);



export default function AuthProvider({ children }){
  const [isLogedIn, setIsLogedIn] = React.useState(false);
  const toggleLogin = ()=>{
    setIsLogedIn(!isLogedIn);
  }
  return (
    <authContext.Provider value={{
      isLogedIn,
      toggleLogin,
    }}>
      {children}
    </authContext.Provider>
  )
}