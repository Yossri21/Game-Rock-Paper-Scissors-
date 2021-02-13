import React from 'react'
import Button from '../Button/Button';

export default function Modes({ label, onClickMode }) {
    return (
        <div >
		<span className="label">{label}</span><br />
		<Button
			onClick={onClickMode}
		>
			CHANGE MODE
		</Button>
	</div>
    )
}
