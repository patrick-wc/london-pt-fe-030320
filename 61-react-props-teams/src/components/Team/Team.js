import React from "react";
import Player from "./Player/Player";

const Team = (props) => {
  const { players, teamName } = props;
  console.log(players);

  return (
    <div className="team">
      <p>{teamName}</p>
      {players.map((player) => (
        <Player player={player} />
      ))}
    </div>
  );
};

export default Team;
