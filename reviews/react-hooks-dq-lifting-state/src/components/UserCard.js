import React from "react";

function UserCard(props) {
  return (
    <div className="card">
      <div className="content">
        <img
          className="right floated mini ui image"
          alt={props.handle}
          src={props.photo}
        />
        <div className="header">{props.handle}</div>
        <div className="description">{props.description}</div>
      </div>
      <div
        onClick={() => props.handleUserClick(props.id)}
        className="ui bottom attached button"
      >
        <i className="add icon"></i>
        View Tweets
      </div>
    </div>
  );
}

export default UserCard;
