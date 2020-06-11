import React from "react";

const Player = (props) => {
  const { player } = props;
  console.log(player);

  return (
    <div className="player">
      <ul>
        <li key={player}>{player}</li>
      </ul>
    </div>
  );
};

export default Player;
