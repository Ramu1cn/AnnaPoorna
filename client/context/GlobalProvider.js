import React, { createContext, useContext, useState } from 'react';

// Create a context
const GlobalContext = createContext({});

// Create a provider component
export const GlobalProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({ user: null});

    return (
        <GlobalContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook to use the context
export const useGlobalState = () => useContext(GlobalContext);