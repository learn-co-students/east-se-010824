import { useState } from "react"
import { Outlet } from "react-router-dom"

import Header from "./components/Header"
import Auth from "./components/Auth"

function App() {
  const [ darkMode, setDarkMode ] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState(null)

  function onDarkModeToggle() {
    setDarkMode(!darkMode)
  }

  const className = darkMode ? 'App' : 'App light'

  return <div className={className}>
    <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle}/> 
    {
      !!loggedInUser ?
      <Outlet /> :
      <Auth setUser={setLoggedInUser} />
    }
  </div>;
}

export default App;
