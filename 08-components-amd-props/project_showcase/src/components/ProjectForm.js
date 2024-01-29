function ProjectForm() {
    return (
        <form>
            <label htmlFor='name'>Name:</label>
            <input id='name' name='name' placeholder='Project Name'/>
            <label htmlFor='description'>Description:</label>
            <input id='description' name='description' placeholder='Project Description'/>
            <button type='submit'>Add Project</button>
        </form>
    )
}

export default ProjectForm;