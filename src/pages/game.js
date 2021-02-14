import React, { useState } from "react";
import Modes from "../components/Actions/Actions";
import Challenge from "../components/Challenge/Challenge";
import ChoiceList from "../components/ChoiceList/ChoiceList";
import Result from "../components/Result/Result";
import { getWinner, getRandomChoice } from "../utils/utils";
import { modes, modeKeys, choiceKeys } from "../utils/data";
import "./game.css";
import { FaHourglassHalf } from "react-icons/fa";

export default function Game() {
  let modeStorage = modeKeys[0];
  let player1Score = 0;
  let player2Score = 0;

  if (localStorage.getItem("mode")) {
    modeStorage = localStorage.getItem("mode");
  } else {
    localStorage.setItem("mode", modeKeys[0]);
  }

  if (localStorage.getItem("player1Score")) {
    player1Score = localStorage.getItem("player1Score");
  } else {
    localStorage.setItem("player1Score", 0);
  }

  if (localStorage.getItem("player2Score")) {
    player2Score = localStorage.getItem("player2Score");
  } else {
    localStorage.setItem("player2Score", 0);
  }

  const [mode, setMode] = useState(modeStorage);
  const [player1, setPlayer1] = useState({
    loading: false,
    choice: null,
    score: parseInt(player1Score),
  });
  const [player2, setPlayer2] = useState({
    loading: false,
    choice: null,
    score: parseInt(player2Score),
  });
  const [winner, setWinner] = useState(null);

  const play = (choice) => {
    const choice1 = getRandomChoice();
    const choice2 = choice || getRandomChoice();
    const simulateMode = mode === modeKeys[1];
    let dataPlayer1 = { ...player1, choice: choice1, loading: true };
    let dataPlayer2 = {
      ...player2,
      choice: choice2,
      loading: simulateMode || player2.loading,
    };
    setPlayer1(dataPlayer1);
    setPlayer2(dataPlayer2);
    setTimeout(() => {
      setResult(dataPlayer1, dataPlayer2);
    }, 600);
  };

  const setResult = (data1, data2) => {
    const winner = getWinner(data1.choice, data2.choice);
    let score1 = data1.score + (winner === 1 ? 1 : 0);
    let score2 = data2.score + (winner === 2 ? 1 : 0);

    setPlayer1({
      ...data1,
      score: score1,
      loading: false,
    });
    setPlayer2({
      ...data2,
      score: score2,
      loading: false,
    });
    setWinner(winner);

    localStorage.setItem("player1Score", score1);
    localStorage.setItem("player2Score", score2);
  };

  const restart = () => {
    setPlayer1({
      ...player1,
      choice: null,
    });
    setPlayer2({
      ...player2,
      choice: null,
    });

    setWinner(null);
  };

  const resetScore = () => {
    setPlayer1({
      loading: false,
      choice: null,
      score: 0,
    });

    setPlayer2({
      loading: false,
      choice: null,
      score: 0,
    });
    setWinner(null);
    localStorage.setItem("player1Score", 0);
    localStorage.setItem("player2Score", 0);
  };

  const toggleMode = () => {
    resetScore();
    setMode(mode === modeKeys[0] ? modeKeys[1] : modeKeys[0]);
    localStorage.setItem(
      "mode",
      mode === modeKeys[0] ? modeKeys[1] : modeKeys[0]
    );
  };

  const { player1Label, player2Label } = modes[mode];
  const loading = player1.loading || player2.loading;

  return (
    <div className="game">
      <h1>Waste An Hour Having Fun {<FaHourglassHalf />}</h1>

      <div className="modes">
        <Modes
          onClickMode={() => toggleMode()}
          label={modes[mode].label}
          text={"CHANGE MODE"}
        />
      </div>

      <div className="challenge">
        <Challenge
          player1={{ ...player1, label: player1Label }}
          player2={{ ...player2, label: player2Label }}
        />
      </div>

      <div className="footer">
        {winner === null && !loading && mode === modeKeys[0] && (
          <ChoiceList
            choices={choiceKeys}
            onClickChoice={(choice) => play(choice)}
          />
        )}

        {(winner !== null || loading || mode === modeKeys[1]) && (
          <Result
            player1Label={player1Label}
            player2Label={player2Label}
            winner={winner}
            loading={loading}
            onClickPlay={() => (mode === modeKeys[1] ? play() : restart())}
          />
        )}
        <Modes onClickMode={() => resetScore()} text={"RESET GAME"} />
      </div>
    </div>
  );
}
