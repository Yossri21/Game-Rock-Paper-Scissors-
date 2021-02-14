import React from "react";
import Player from "./Player/Player";

import "./Challenge.css";
export default function Challenge({ player1, player2 }) {
  return (
    <div className="container">
      <Player {...player1} />
      <span className="vs">VS</span>
      <Player {...player2} />
    </div>
  );
}
