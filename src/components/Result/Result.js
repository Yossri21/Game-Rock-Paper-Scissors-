import React from 'react'
import Button from '../Button/Button';

export default function Result({ winner, player1Label, player2Label, onClickPlay, loading }) {
    return (
        <div  >
		{winner !== null && !loading && (
			<div className="winner">
				<span>
					{winner === 0 ? 'TIE' : `${(winner === 1 ? player1Label : player2Label)} WINS`}
				</span>
			</div>
		)}
		<div className="play">
			<Button
				disabled={loading}
				onClick={onClickPlay}
			>
				PLAY {(loading || winner !== null) && 'AGAIN'}
			</Button>
		</div>
	</div>
    )
}
