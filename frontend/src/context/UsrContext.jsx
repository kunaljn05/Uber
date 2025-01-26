import React, { createContext } from "react";

export const userDataContext = createContext();

const UsrContext = ({ children }) => {
    const user = 'kunal'
  return (
    <userDataContext.Provider value={user}>
      <div>{children}</div>
    </userDataContext.Provider>
  );
};

export default UsrContext;
