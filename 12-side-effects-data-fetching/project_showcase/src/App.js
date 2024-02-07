import { useState } from "react"

import Header from "./components/Header"
import ProjectContainer from "./components/ProjectContainer"

import projects from "./projects"

function App() {
  const [ darkMode, setDarkMode ] = useState(true)

  function onDarkModeToggle() {
    setDarkMode(!darkMode)
  }

  const className = darkMode ? 'App' : 'App light'

  return <div className={className}>
    <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle}/>
    <ProjectContainer allProjects={projects} />
  </div>;
}

export default App;
