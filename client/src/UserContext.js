import React from 'react'
import {createContext, useState} from "react";

export const UserContext = createContext({});
const UserContextProvider = ({children}) => {
  const [userInfo,setUserInfo] = useState({});
    return (
        <div>
            <UserContext.Provider value={{userInfo,setUserInfo}}>
              {children}
            </UserContext.Provider>
        </div>
  );
}

export default UserContextProvider

