import React, { useState, useEffect } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";

function TweetsContainer() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("1")

  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then((resp) => resp.json())
    .then((allUsers) => setUsers(allUsers))
  }, [])

  function updateSelectedUser(userId) {
    setSelectedUserId(userId)
  }

  // const foundUser = users.find((user) => user.id === selectedUserId)
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} updateSelectedUser={updateSelectedUser}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList userId={selectedUserId} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
