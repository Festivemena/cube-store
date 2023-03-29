import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [dark, setDark] = useState(true)
  const [userName, SetUserName] = useState("Matilda Brown")
  const [userEmail, SetUserEmail] = useState("matildabrown@gmail.com")

  function handleClick() {
    setDark(!dark);
  }

  return (
    <AppContext.Provider
      value={{ handleClick, dark, setDark, userName, SetUserName, userEmail, SetUserEmail }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
