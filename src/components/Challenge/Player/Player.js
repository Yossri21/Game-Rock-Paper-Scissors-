import React from "react";
import Choice from "../../Choice/Choice";
import "./Player.css";

export default function Player({ label, choice, loading, score }) {

  return (
    <div className="player">
      <div>
        <span className="label">{label}</span>
      </div>
      <Choice icon={choice} loading={loading} />
      <div>
        <p className="score">
          {" "}
          {score} pt{score > 1 && "s"}
        </p>
      </div>
    </div>
  );
}
