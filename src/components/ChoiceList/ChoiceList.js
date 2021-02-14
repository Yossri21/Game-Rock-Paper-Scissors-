import React from "react";
import Button from "../Button/Button";
import Choice from "../Choice/Choice";

import "./ChoiceList.css";

export default function ChoiceList({ choices, onClickChoice }) {
  return (
    <div className="ChoiceList">
      <ul>
        {choices.map((choice) => (
          <li key={choice}>
            <Button
              style={{ background: "transparent" }}
              onClick={() => onClickChoice(choice)}
            >
              <Choice icon={choice} />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
