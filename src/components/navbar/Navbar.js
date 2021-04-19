import React from 'react'
import { IconContext } from 'react-icons'
import { FaCannabis, FaWrench, FaNewspaper, FaMusic } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import navbarStyle from './Navbar.module.scss'



export const Navbar = () => (
    <IconContext.Provider value={{ size: '0.75em' }}>
        <nav className={navbarStyle.navbar}>
            <a href='/profile'>
                <FaCannabis />
                <span>My profile</span>
            </a>
            <a href='/dialogs'>
                <AiFillMessage />
                <span>Messages</span>
            </a>
            <a href='/news'>
                <FaNewspaper />
                <span>News</span>
            </a>
            <a href='/music'>
                <FaMusic />
                <span>Music</span>
            </a>
            <a href='/settings'>
                <FaWrench />
                <span>Settings</span>
            </a>
        </nav>
    </IconContext.Provider>
)
