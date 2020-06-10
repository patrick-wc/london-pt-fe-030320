import React from "react";

const UserCard = (props) => {
  const { user } = props;
  const { name, email } = user;
  return (
    <div className="card">
      <p>Name: {name}</p>
      <p>Name: {email}</p>
    </div>
  );
};

export default UserCard;
