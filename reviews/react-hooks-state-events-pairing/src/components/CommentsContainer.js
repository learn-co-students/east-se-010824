import { useState } from "react"

import Comment from "./Comment"

function CommentsList({ comments }) {

    const renderComments = comments.map(({ id, user, comment }) => (
        <Comment 
            key={id} 
            user={user}
            comment={comment}
        />
    ))

    return (
        <>
            <h2>{comments.length} Comments</h2>
            { renderComments }
        </>
    )
}

function CommentsContainer({ comments }) {
    const [showComments, setShowComments] = useState(true)

    function handleClick() {
        setShowComments((currentShowComments) => !currentShowComments)
    }

    const buttonText = showComments ? 'Hide' : 'Show'

    const displayComments = showComments ? <CommentsList comments={comments} /> : null

    return (
        <div>
            <button onClick={handleClick}>{buttonText} Comments</button>
            <hr></hr>
            { displayComments }
        </div>
    )
}

export default CommentsContainer