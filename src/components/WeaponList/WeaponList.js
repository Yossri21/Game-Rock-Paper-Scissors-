import React from 'react'
import Button from '../Button/Button';
import Weapon from '../Weapon/Weapon'

export default function WeaponList({ weapons, onClickWeapon }) {
    return (
        <div >
		<ul style = {{listStyleType: "none",
    display: "flex"}}>
			{weapons.map(weapon => (
				<li key={weapon}>
					<Button
						onClick={() => onClickWeapon(weapon)}
					>
						<Weapon
							icon={weapon}
						/>
					</Button>
				</li>
			))}
		</ul>
		<span >CHOOSE A WEAPON</span>
	</div>
    )
}
