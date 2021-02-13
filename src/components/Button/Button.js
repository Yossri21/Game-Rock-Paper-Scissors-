import React from 'react'

export default function Button({ children, ...rest }) {
    return (
        <button
		{...rest}
		style = {{    fontSize: 31 ,
			background: "none",
			color: "gray",
			border: "none"}}
	>
		{children}
	</button>
    )
}
