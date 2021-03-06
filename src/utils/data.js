export const modes = {
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

export const choices = {
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

export const modeKeys = Object.keys(modes);
export const choiceKeys = Object.keys(choices);
export const timeoutOfGame = 700;
