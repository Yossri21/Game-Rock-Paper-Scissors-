import React from 'react'
import Weapon from '../../Weapon/Weapon';

export default function Player({ label, weapon, loading, score }) {
    return (
        <div  >
		<div>
			<span className="label">{label}</span>
		</div>
		<Weapon
			icon={weapon}
			loading={loading}
		/>
		<div>
			<span className="score">{score} PT{score > 1 && 'S'}</span>
		</div>
	</div>
    )
}
