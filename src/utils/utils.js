import { choices, choiceKeys } from "./data";

export const getWinner = (choice1, choice2) => {
  if (choice1 === choice2) return 0;
  return choices[choice1].wins.some((wins) => wins === choice2) ? 1 : 2;
};

export const getRandomChoice = () => {
  return choiceKeys[(choiceKeys.length * Math.random()) << 0];
};
