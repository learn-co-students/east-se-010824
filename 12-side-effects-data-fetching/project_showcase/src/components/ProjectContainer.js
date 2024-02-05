import { useState, useEffect } from "react"

import ProjectForm from "./ProjectForm"
import ProjectsList from "./ProjectsList"

function ProjectContainer() {
    const [ projects, setProjects ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/projects')
        .then((resp) => resp.json())
        .then((data) => setProjects(data))
        return () => {
            // cleanup any intervals or timeouts set in the callback function
        }
    }, [])

    function onAddProject(newProject) {
        setProjects((currentProjects) => {
            return [...currentProjects, newProject]
        })
    }

    return (
        <div>
            <ProjectForm onAddProject={onAddProject}/>
            <ProjectsList projects={projects} />
        </div>
    )
}

export default ProjectContainer