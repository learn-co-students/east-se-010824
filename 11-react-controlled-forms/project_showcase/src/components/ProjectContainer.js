import { useState } from "react"

import ProjectForm from "./ProjectForm"
import ProjectsList from "./ProjectsList"

function ProjectContainer({ allProjects }) {
    const [ projects, setProjects ] = useState(allProjects)

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