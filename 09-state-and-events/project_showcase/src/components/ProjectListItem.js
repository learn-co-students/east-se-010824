// function ProjectListItem({ project: { name, image, about, id, phase, link } }) {
function ProjectListItem({ project }) {
    const { name, image, about, id, phase, link } = project
    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={`project: ${name}`}/>
            </figure>
            <article>
                <h4>{name}</h4>
                <p>
                    {about}
                </p>
                <p>
                   Phase: {phase}
                </p>
            </article>
        </li>
    )
}

export default ProjectListItem