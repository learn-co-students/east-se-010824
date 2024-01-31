import { useState } from "react"

import Header from "./components/Header"
import ProjectForm from "./components/ProjectForm"
import ProjectsList from "./components/ProjectsList"

import projects from "./projects"

function App() {
  const [ darkMode, setDarkMode ] = useState(true)

  function onDarkModeToggle() {
    setDarkMode(!darkMode)
  }

  const className = darkMode ? 'App' : 'App light'

  return <div className={className}>
    <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle}/>
    <ProjectForm />
    <ProjectsList projects={projects} />
  </div>;
}

export default App;
