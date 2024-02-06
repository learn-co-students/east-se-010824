import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedUserId, setSelectedUserId] = useState(userData[0].id)

  function updateSelectedUser(userId) {
    setSelectedUserId(userId)
  }

  const foundUser = users.find((user) => user.id === selectedUserId)
  console.log(foundUser)
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} updateSelectedUser={updateSelectedUser}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={foundUser}/>
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
