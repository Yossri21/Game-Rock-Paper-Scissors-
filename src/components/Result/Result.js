import React from 'react'
import Button from '../Button/Button';
import './Result.css';

export default function Result({ winner, player1Label, player2Label, onClickPlay, loading }) {
    return (
        <div className="results" >
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
