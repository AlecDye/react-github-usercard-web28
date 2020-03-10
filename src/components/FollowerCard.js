import React from "react";

function FollowerCard(props) {
  return (
    <div className="user-card">
      {props.followerData.map(item => (
        <>
          <div className="img-container">
            <img src={item.avatar_url} key={item.id} alt="User's avatar" />
          </div>
          <h3>{item.login}</h3>
          <a href={item.url}>
            <p>Github Profile</p>
          </a>
        </>
      ))}
    </div>
  );
}

export default FollowerCard;
