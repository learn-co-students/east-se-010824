import ProjectListItem from "./ProjectListItem"

function ProjectsList({ projects }) {
    const renderProjects = projects.map((project) => <ProjectListItem key={project.id} project={project} />)
    
    return (
        <section>
            <h2>Projects</h2>

            <div className="filter">
                <button>All</button>
                <button>Phase 5</button>
                <button>Phase 4</button>
                <button>Phase 3</button>
                <button>Phase 2</button>
                <button>Phase 1</button>
            </div>

            <input type="text" placeholder="Search..."/>

            <ul className="cards">
                { renderProjects }
            </ul>
        </section>
    )
}

export default ProjectsList