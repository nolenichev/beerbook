import React from 'react'
import { IconContext } from 'react-icons'
import {
	FaUserAlt,
	FaNewspaper,
	FaMusic,
	FaUserFriends,
} from 'react-icons/fa'
import { BiMessageDetail } from 'react-icons/bi'
import { IoMdSettings } from 'react-icons/io'
import navbarStyle from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
	<IconContext.Provider value={{ size: '0.75em' }}>
		<nav className={navbarStyle.navbar}>
			<NavLink to="/profile" activeClassName={navbarStyle.active}>
				<FaUserAlt />
				<span>My profile</span>
			</NavLink>
			<NavLink to="/users" activeClassName={navbarStyle.active}>
				<FaUserFriends />
				<span>Users</span>
			</NavLink>
			<NavLink to="/dialogs" activeClassName={navbarStyle.active}>
				<BiMessageDetail />
				<span>Messages</span>
			</NavLink>
			<NavLink to="/news" activeClassName={navbarStyle.active}>
				<FaNewspaper />
				<span>News</span>
			</NavLink>
			<NavLink to="/music" activeClassName={navbarStyle.active}>
				<FaMusic />
				<span>Music</span>
			</NavLink>
			<NavLink to="/settings" activeClassName={navbarStyle.active}>
				<IoMdSettings />
				<span>Settings</span>
			</NavLink>
		</nav>
	</IconContext.Provider>
)
