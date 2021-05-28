import React from 'react'
import { IconContext } from 'react-icons'
import { FaUserAlt, FaNewspaper, FaMusic, FaUserFriends } from 'react-icons/fa'
import { BiMessageDetail } from 'react-icons/bi'
import { IoMdSettings } from 'react-icons/io'
import style from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {
	const userId = props.id

	return (
		<IconContext.Provider value={{ size: '0.75em' }}>
			<nav className={style.navbar}>
				<NavLink to={`id${userId}`} activeClassName={style.active}>
					<FaUserAlt />
					<span>My profile</span>
				</NavLink>
				<NavLink to="/users" activeClassName={style.active}>
					<FaUserFriends />
					<span>Users</span>
				</NavLink>
				<NavLink to="/dialogs" activeClassName={style.active}>
					<BiMessageDetail />
					<span>Messages</span>
				</NavLink>
				<NavLink to="/news" activeClassName={style.active}>
					<FaNewspaper />
					<span>News</span>
				</NavLink>
				<NavLink to="/music" activeClassName={style.active}>
					<FaMusic />
					<span>Music</span>
				</NavLink>
				<NavLink to="/settings" activeClassName={style.active}>
					<IoMdSettings />
					<span>Settings</span>
				</NavLink>
			</nav>
		</IconContext.Provider>
	)
}

const mapStateToProps = (state) => ({
	id: state.auth.id,
})

export default connect(mapStateToProps)(Navbar)
