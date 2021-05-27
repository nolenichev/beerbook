import React from 'react'
import { NavLink } from 'react-router-dom'
import beerIcon from './../../images/beer.svg'

export const Header = (props) => {
	const logout = () => {
		return props.logout()
	}

	return (
		<header className="header">
			<div>
				<div>
					<img src={beerIcon} alt="beer" />
					<span>BeerBook</span>
				</div>

				{props.isAuth ? (
					<button onClick={logout}>Logout</button>
				) : (
					<NavLink to="/login">Login</NavLink>
				)}
			</div>
		</header>
	)
}
