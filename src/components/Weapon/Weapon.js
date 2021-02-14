import React from "react";
import Loading from "../Loading/Loading"; 
import { FaHandRock } from 'react-icons/fa';
import { FaHandScissors } from 'react-icons/fa';
import { FaHandPaper } from 'react-icons/fa';
import './Weapon.css';

export default function Weapon({ icon, loading }) {
	 const WeaponIcon = ()=>{
		switch (icon) {
			case 'rock':
				return <FaHandRock /> ;
				case 'scissors':
				return <FaHandScissors />;
				case 'paper':
					return <FaHandPaper />;
			default:
				return "Unknown Weapon";
		}
	}
 
	
  return (
    <span className="Weapon" >
      
	  {!loading && icon ? <WeaponIcon   /> : null}
      {!loading && !icon && "?"}
      {loading && <Loading />}
    </span>
  );
}
