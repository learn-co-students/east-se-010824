import { useState } from "react"

// const initial = {
//     likes: 0,
//     dislikes: 0
// }

function Details({ createdAt, downvotes, title, upvotes, views }) {
    // const [ likes, setLikes ] = useState(upvotes)
    // const [ dislikes, setDislike ] = useState(downvotes)
    // const handleLikes = () => setLikes((currentLikes) => currentLikes + 1)
    // const handleDislikes = () => setDislike(dislikes + 1)

    const initialState = {
        likes: upvotes,
        dislikes: downvotes
    }
    const [ votes, setVotes] = useState(initialState)

    const handleVotes = (feedback) => {
        setVotes({
            ...votes, 
            [feedback]: votes[feedback] + 1
        })
    }

    return (
        <section>
            <h1>{ title }</h1>
            <p>{ views } Views | Uploaded { createdAt }</p>
            <button onClick={() => handleVotes('likes')}>{votes.likes} 👍</button>
            <button onClick={() => handleVotes('dislikes')}>{votes.dislikes} 👎</button>
        </section>
    )
}
export default Details