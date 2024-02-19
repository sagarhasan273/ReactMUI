import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function ContextProvider({ children }){
    const [user, setUser] = useState({});

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export const useGlobalContext = () => useContext(UserContext);