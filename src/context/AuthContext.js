import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext({});

export default function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("https://react-oauth-demo.herokuapp.com/auth/user", { withCredentials: true })
            .then(res => {
                res.data && setUser(res.data);
            })
    }, []);

    return (
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    )
}

