import React from "react";
import Loading from "../Loading/Loading";
import { FaHandRock } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaMehRollingEyes } from "react-icons/fa";

import "./Choice.css";

export default function Choice({ icon, loading }) {
  const ChoiceIcon = () => {
    switch (icon) {
      case "rock":
        return <FaHandRock />;
      case "scissors":
        return <FaHandScissors />;
      case "paper":
        return <FaHandPaper />;
      default:
        return "Unknown Choice";
    }
  };

  return (
    <span className="Choice">
      {!loading && icon ? <ChoiceIcon /> : null}
      {!loading && !icon &&  <FaMehRollingEyes />}
      {loading && <Loading />}
    </span>
  );
}
