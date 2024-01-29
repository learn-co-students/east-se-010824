import ProjectListItem from "./ProjectListItem"

function ProjectsList({ projects }) {
    console.log(projects)
    const renderProjects = projects.map((project) => <ProjectListItem key={project.id} project={project} />)
    return (
        <div>
            { renderProjects }
        </div>
    )
}

export default ProjectsList