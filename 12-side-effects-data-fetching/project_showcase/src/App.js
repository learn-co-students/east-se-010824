import { useState } from "react"

import Header from "./components/Header"
import ProjectContainer from "./components/ProjectContainer"

<<<<<<< HEAD
function App() {
  const [ darkMode, setDarkMode ] = useState(true)
  const [ showHeader, setShowHeader ] = useState(true)

  function handleToggle() {
    setShowHeader((currentState) => !currentState)
  }
=======
import projects from "./projects"

function App() {
  const [ darkMode, setDarkMode ] = useState(true)
>>>>>>> main

  function onDarkModeToggle() {
    setDarkMode(!darkMode)
  }

  const className = darkMode ? 'App' : 'App light'

  return <div className={className}>
<<<<<<< HEAD
    <button onClick={handleToggle}>Toggle Header component</button>
    {/* {showHeader ?  */}
    <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle}/> 
     {/* : null} */}
    <ProjectContainer />
=======
    <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle}/>
    <ProjectContainer allProjects={projects} />
>>>>>>> main
  </div>;
}

export default App;
