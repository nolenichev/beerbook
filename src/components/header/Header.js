import React from 'react'
import { NavLink } from 'react-router-dom'
import beerIcon from './../../images/beer.svg'

export const Header = (props) => (
	<header className="header">
		<div>
			<div>
				<img src={beerIcon} alt="beer" />
				<span>BeerBook</span>
			</div>

			{props.isAuth ? (
				<h3>{props.login}</h3>
			) : (
				<NavLink to="/login">Login</NavLink>
			)}
		</div>
	</header>
)
