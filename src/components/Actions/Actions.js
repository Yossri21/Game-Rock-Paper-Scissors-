import React from 'react'
import Button from '../Button/Button';
import './Actions.css';
export default function Modes({ label, onClickMode , text}) {
    return (
        <div  className="Mode" >
		<span className="labelTitle"  >{label||""}</span> 
		<Button 
		 className="Button"
			onClick={onClickMode}
		>
			{text}
		</Button>
	</div>
    )
}
