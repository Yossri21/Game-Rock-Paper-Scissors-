import { choices, choiceKeys, modeKeys} from "./data";

export const getWinner = (choice1, choice2) => {
  if (choice1 === choice2) return 0;
  return choices[choice1].wins.some((wins) => wins === choice2) ? 1 : 2;
};

export const getRandomChoice = () => {
  return choiceKeys[(choiceKeys.length * Math.random()) << 0];
};

export const getLocalStorageItem = (key ) => {
  if (!key) return;
  return localStorage.getItem(key);
}

export const setLocalStorageItem =(key , value)=>{
 if (!key) return;
 localStorage.setItem(key , value);
}

export const setLocalStorageDefaultGameValues = () =>{
  if (!getLocalStorageItem("mode")) {
    setLocalStorageItem("mode", modeKeys[0]);
  }

  if (!getLocalStorageItem("player1Score")) {
    setLocalStorageItem("player1Score", 0);
  }

  if (!getLocalStorageItem("player2Score")) {
    setLocalStorageItem("player2Score", 0);
  }

}