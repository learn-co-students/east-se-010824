function Article({ title, preview, date="January 1, 1970", minutes }) {

    function repeatEmojis(divideBy, emoji) {
        const float = minutes / divideBy
        const roundedUp = Math.ceil(float)
        return emoji.repeat(roundedUp) 
    }

    function displayMinutes() {
        let emojis = minutes >= 30 ? repeatEmojis(10, "🍱") : repeatEmojis(5, "☕️")
        return `${emojis} ${minutes} min read`
    }

    return <article>
        <h3>{ title }</h3>
        <small>{ date } * {displayMinutes()} </small>
        <p>{ preview }</p>
    </article>
}

export default Article