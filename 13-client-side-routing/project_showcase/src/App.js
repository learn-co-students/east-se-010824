import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  const [ darkMode, setDarkMode ] = useState(true)

  function onDarkModeToggle() {
    setDarkMode(!darkMode)
  }

  const className = darkMode ? 'App' : 'App light'

  return <div className={className}>
    <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle}/> 
    {/* <ProjectContainer /> */}
    <Outlet />
  </div>;
}

export default App;
