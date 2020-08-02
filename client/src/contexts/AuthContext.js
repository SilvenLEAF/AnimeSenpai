import React, { createContext, useState } from "react";


export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [userData, setUserData] = useState({
    token: 'Special Token',
    user: "This is for my user"
  });

  return (
    <AuthContext.Provider value={{ userData, setUserData}}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;