import React from 'react'
import { IconContext } from 'react-icons'
import { FaCannabis, FaWrench, FaNewspaper, FaMusic } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import navbarStyle from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'


export const Navbar = () => (
    <IconContext.Provider value={{ size: '0.75em' }}>
        <nav className={navbarStyle.navbar}>
            <NavLink to='/profile' activeClassName={navbarStyle.active}>
                <FaCannabis />
                <span>My profile</span>
            </NavLink>
            <NavLink to='/dialogs' activeClassName={navbarStyle.active}>
                <AiFillMessage />
                <span>Messages</span>
            </NavLink>
            <NavLink to='/news' activeClassName={navbarStyle.active}>
                <FaNewspaper />
                <span>News</span>
            </NavLink>
            <NavLink to='/music' activeClassName={navbarStyle.active}>
                <FaMusic />
                <span>Music</span>
            </NavLink>
            <NavLink to='/settings' activeClassName={navbarStyle.active}>
                <FaWrench />
                <span>Settings</span>
            </NavLink>
        </nav>
    </IconContext.Provider>
)
