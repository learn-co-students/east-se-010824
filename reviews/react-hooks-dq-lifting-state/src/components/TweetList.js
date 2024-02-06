import React, { useState, useEffect } from "react";
import TweetItem from "./TweetItem";

function TweetList({ userId }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/users/${userId}?_embed=tweets`)
    .then((resp) => resp.json())
    .then((data) => setUser(data))
  }, [userId])

  function handleTweetLike(tweetId) {
    // make patch request
    const tweetToUpdate = user.tweets.find((tweet) => tweet.id === tweetId )
    fetch(`http://localhost:3001/tweets/${tweetId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        favorite_count: tweetToUpdate.favorite_count + 1
      })
    })
    .then(resp => resp.json())
    .then((updatedTweet) => {
      setUser((currentUser) => {
        const updatedTweets = currentUser.tweets.map((tweet) => {
          if (tweet.id === tweetId) {
            return updatedTweet
          } else {
            return tweet
          }
        })
        return {
          ...currentUser,
          tweets: updatedTweets
        }
      })
    })

  }

  return (
    <div className="ui segment">
      <div className="ui feed">
        {!user ? <p>Loading...</p> : user.tweets.map((tweet) => (
          <TweetItem
            key={tweet.id}
            handleTweetLike={handleTweetLike}
            handle={user.handle}
            photo={user.photo}
            tweet={tweet}
          />
        ))}
      </div>
    </div>
  );
}

export default TweetList;
