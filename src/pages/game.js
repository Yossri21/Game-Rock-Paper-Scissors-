import React, { useState } from "react";
import Modes from "../components/Modes/Modes";
import Challenge from "../components/Challenge/Challenge";
import WeaponList from "../components/WeaponList/WeaponList";
import Result from "../components/Result/Result";


export default function Game() {
  const weapons = {
    rock: {
      wins: ["scissors"],
    },
    paper: {
      wins: ["rock"],
    },
    scissors: {
      wins: ["paper"],
    },
  };

  const modes = {
    vs: {
      label: "PLAYER VS COMPUTER",
      player1Label: "COMPUTER",
      player2Label: "PLAYER",
    },
    simulate: {
      label: "COMPUTER VS COMPUTER",
      player1Label: "COMPUTER 1",
      player2Label: "COMPUTER 2",
    },
  };
  const modeKeys = Object.keys(modes);
  const weaponKeys = Object.keys(weapons);
  const getRandomWeapon = () => {
    return weaponKeys[(weaponKeys.length * Math.random()) << 0];
  };

  const getWinner = (weapon1, weapon2) => {
    if (weapon1 === weapon2) return 0;
    return weapons[weapon1].wins.some((wins) => wins === weapon2) ? 1 : 2;
  };

  const [mode, setMode] = useState(modeKeys[0]);
  const [player1, setPlayer1] = useState({
    loading: false,
    weapon: null,
    score: 0,
  });
  const [player2, setPlayer2] = useState({
    loading: false,
    weapon: null,
    score: 0,
  });
  const [winner, setWinner] = useState(null);

  const play = (weapon) => {
    
    const weapon1 = getRandomWeapon();
    const weapon2 = weapon || getRandomWeapon();
    const simulateMode = mode === modeKeys[1];
    console.log(weapon , weapon1 , weapon2)

    let dataPlayer1 = { ...player1, weapon: weapon1, loading: true }
    let dataPlayer2 = {
        ...player2,
        weapon: weapon2,
        loading: simulateMode || player2.loading,
      }
    setPlayer1(dataPlayer1);
 
    setPlayer2(dataPlayer2);
   
    
    // Update result after some delay
    setTimeout(() => {
      setResult(dataPlayer1 , dataPlayer2 );
    }, 900);
  };

  const setResult = (data1 , data2) => {
  
    
    const winner = getWinner(data1.weapon, data2.weapon);
 
    
    setPlayer1({
      ...data1,
      score: data1.score + (winner === 1 ? 1 : 0),
      loading: false,
    });
    setPlayer2({
      ...data2,
      score: data2.score + (winner === 2 ? 1 : 0),
      loading: false,
    });
    setWinner(winner);
  };

 const  restart = () => {

    setPlayer1({
        ...player1 ,
        weapon : null ,
    })
    setPlayer2({
        ...player2 ,
        weapon : null ,
    })

 setWinner(null)
}

const reset = () => {

    setMode(modeKeys[0])
    setPlayer1({
        loading: false,
        weapon: null,
        score: 0,
      })
 
      setPlayer2({
        loading: false,
        weapon: null,
        score: 0,
      })
 setWinner (null);
    
}

const toggleMode = () => {
   
   reset();
    setMode(   mode === modeKeys[0] ? modeKeys[1] : modeKeys[0]  )
}


 
    const { player1Label, player2Label } = modes[mode];
    const loading = (player1.loading || player2.loading);

    return (
        <div  > 
            <h1>
                ROCK, PAPER, SCISSORS
            </h1>

            <div className="modes">
                <Modes
                    onClickMode={() => toggleMode()}
                    label={modes[mode].label}
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
                    <WeaponList
                        weapons={weaponKeys}
                        onClickWeapon={weapon => play(weapon)}
                    />
                )}

                {(winner !== null || loading || mode === modeKeys[1]) && (
                    <Result
                        player1Label={player1Label}
                        player2Label={player2Label}
                        winner={winner}
                        loading={loading}
                        onClickPlay={() => mode === modeKeys[1] ?
                            play() : restart()
                        }
                    />
                )}
            </div>
        </div>
    );

}
