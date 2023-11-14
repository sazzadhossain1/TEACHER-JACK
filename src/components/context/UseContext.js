import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const UseContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
