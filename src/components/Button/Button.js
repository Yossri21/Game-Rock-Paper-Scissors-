import React from 'react'
import './Button.css';
export default function Button({ children, ...rest }) {
    return (
        <button
		className="Button"
		{...rest}
		 
	>
		{children}
	</button>
    )
}
