import Article from "./Article"

function ArticleList({ posts }) {
    const renderPosts = posts.map(({ id, title, date, preview, minutes }) => (
        <Article 
            key={id}
            title={title}
            date={date}
            preview={preview}
            minutes={minutes}
        />
    ))
    return (
        <main>
            { renderPosts }
        </main>
    )
}

export default ArticleList