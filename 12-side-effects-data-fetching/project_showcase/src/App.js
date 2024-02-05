import { useState } from "react"

import Header from "./components/Header"
import ProjectContainer from "./components/ProjectContainer"

function App() {
  const [ darkMode, setDarkMode ] = useState(true)
  const [ showHeader, setShowHeader ] = useState(true)

  function handleToggle() {
    setShowHeader((currentState) => !currentState)
  }

  function onDarkModeToggle() {
    setDarkMode(!darkMode)
  }

  const className = darkMode ? 'App' : 'App light'

  return <div className={className}>
    <button onClick={handleToggle}>Toggle Header component</button>
    {/* {showHeader ?  */}
    <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle}/> 
     {/* : null} */}
    <ProjectContainer />
  </div>;
}

export default App;
