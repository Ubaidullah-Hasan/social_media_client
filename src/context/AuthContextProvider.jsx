import { createContext, useEffect, useState } from "react";
import userImg from '../assets/images/user.jpeg'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user') || null)
    );

    const login = () => {
        // TODO
        setCurrentUser({id:1, name: 'John Doe', profilePic: userImg});
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    const authInfo = {
        currentUser,
        login,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
}