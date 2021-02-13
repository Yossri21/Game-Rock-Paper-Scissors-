import React from 'react';
import Player from './Player/Player'

export default function Challenge({ player1, player2 }) {
    return (
        <div >
		<Player
			{...player1}
		/>
		<span className="vs">vs</span>
		<Player
			{...player2}
		/>
	</div>
    )
}
