function Comment({ user, comment }) {
    return (
        <article>
            <h3>{ user }</h3>
            <p>{ comment }</p>
        </article>
    )
}

export default Comment