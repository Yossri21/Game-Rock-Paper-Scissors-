import React from "react";
import Button from "../Button/Button";
import Weapon from "../Weapon/Weapon";

import "./WeaponList.css";

export default function WeaponList({ weapons, onClickWeapon }) {
  return (
    <div className="WeaponList">
      <ul>
        {weapons.map((weapon) => (
          <li key={weapon}>
            <Button
              style={{ background: "transparent" }}
              onClick={() => onClickWeapon(weapon)}
            >
              <Weapon icon={weapon} />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
