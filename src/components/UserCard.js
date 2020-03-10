import React from "react";

function UserCard(props) {
  console.log(props);
  return (
    <div className="user-card">
      <div className="img-container">
        <img src={props.userData.avatar_url} alt="Alec's avatar" />
      </div>
      <h3>{props.userData.login}</h3>
      <span>
        <p>{props.userData.followers}</p>
      </span>
      <span>
        <p>{props.userData.following}</p>
      </span>
      <a href={props.userData.url}>
        <p>Github Profile</p>
      </a>
    </div>
  );
}

export default UserCard;
