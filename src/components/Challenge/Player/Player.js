import React from 'react'
import Weapon from '../../Weapon/Weapon';

import './Player.css';

export default function Player({ label, weapon, loading, score }) {
    return (
        <div  className="player" >
		<div>
			<span className="label">{label}</span>
		</div>
		<Weapon
			icon={weapon}
			loading={loading}
		/>
		<div>
		 <p className="score">  {score} pt{score > 1 && 's'}</p>
		</div>
	</div>
    )
}
