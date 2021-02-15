import React, { useState } from "react";
import Modes from "../components/Actions/Actions";
import Challenge from "../components/Challenge/Challenge";
import ChoiceList from "../components/ChoiceList/ChoiceList";
import Result from "../components/Result/Result";
import {
  getWinner,
  getRandomChoice,
  getLocalStorageItem,
  setLocalStorageItem,
  setLocalStorageDefaultGameValues,
} from "../utils/utils";
import { modes, modeKeys, choiceKeys, timeoutOfGame } from "../utils/data";
import "./game.css";
import { FaHourglassHalf } from "react-icons/fa";

export default function Game() {
  // set the defaults vaules in LocalStorage
  setLocalStorageDefaultGameValues();

  const [mode, setMode] = useState(getLocalStorageItem("mode") ?? modeKeys[0]);

  const [player1, setPlayer1] = useState({
    loading: false,
    choice: null,
    score: parseInt(getLocalStorageItem("player1Score") ?? 0),
  });

  const [player2, setPlayer2] = useState({
    loading: false,
    choice: null,
    score: parseInt(getLocalStorageItem("player2Score") ?? 0),
  });

  const [winner, setWinner] = useState(null);

  const play = (choice) => {
    const choice1 = getRandomChoice();
    const choice2 = choice || getRandomChoice();
    const isSimulateMode = mode === modeKeys[1];
    let dataPlayer1 = { ...player1, choice: choice1, loading: true };
    let dataPlayer2 = {
      ...player2,
      choice: choice2,
      loading: isSimulateMode || player2.loading,
    };
    setPlayer1({ ...player1, choice: choice1, loading: true });
    setPlayer2(dataPlayer2);
    setTimeout(() => {
      setResult(dataPlayer1, dataPlayer2);
    }, timeoutOfGame);
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
    setLocalStorageItem("player1Score", score1);
    setLocalStorageItem("player2Score", score2);
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
    setLocalStorageItem("player1Score", 0);
    setLocalStorageItem("player2Score", 0);
  };

  const toggleMode = () => {
    resetScore();
    setMode(mode === modeKeys[0] ? modeKeys[1] : modeKeys[0]);
    setLocalStorageItem(
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
