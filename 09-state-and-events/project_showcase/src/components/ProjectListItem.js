// 5. Define a `ProjectListItem` component that:

// - Accepts the props argument

// - Destructure the props object and return `project`

// - Destructure the properties of the `project` object

// - Create an `img` element nested inside a `figure` element

// - Set the `img` property `src` to the `img` variable created when destructuring

// - Set the `img` property `alt` to `project: ${name}`

// - Create an `article` element with `h4` and `p` tags nested inside

//   - Dynamically render each project name inside the `h4` tag

//   - Dynamically render each project's about data inside the `p` tag

function ProjectListItem() {
    return (
        <article>
            Project List Item
        </article>
    )
}

export default ProjectListItem