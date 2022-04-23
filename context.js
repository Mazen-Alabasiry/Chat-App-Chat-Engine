import React, { useState, useContext, useEffect } from 'react'
const AppContext = React.createContext()
const ContextProvider = ({ children }) => {

    const [userName, setUserName] = useState('')
    const [secret, setSecret] = useState('')

    return <AppContext.Provider value={{ userName, setUserName, secret, setSecret }}>
        {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, ContextProvider }
