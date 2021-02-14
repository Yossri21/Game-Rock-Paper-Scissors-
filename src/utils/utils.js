import { weapons, weaponKeys } from "./data";

export const getWinner = (weapon1, weapon2) => {
  if (weapon1 === weapon2) return 0;
  return weapons[weapon1].wins.some((wins) => wins === weapon2) ? 1 : 2;
};

export const getRandomWeapon = () => {
  return weaponKeys[(weaponKeys.length * Math.random()) << 0];
};
