import Header from "./components/Header"
import ProjectForm from "./components/ProjectForm"
import ProjectsList from "./components/ProjectsList"

import projects from "./projects"

function App() {
  return <div className="App">
    <Header />
    <ProjectForm />
    <ProjectsList projects={projects} />
  </div>;
}

export default App;
