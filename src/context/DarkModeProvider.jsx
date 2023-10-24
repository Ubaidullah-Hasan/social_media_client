import React, { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();


const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem('darkMode')) || false
    );

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    },[darkMode])


    return (
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;