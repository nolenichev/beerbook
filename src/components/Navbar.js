import React from 'react'
import { IconContext } from 'react-icons'
import { FaCannabis, FaWrench, FaNewspaper, FaMusic } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'

export const Navbar = () => (
    <IconContext.Provider value={{ size: '0.7em' }}>
        <nav className="nav">
            <div>
                <FaCannabis />
                <span>My profile</span>
            </div>
            <div>
                <AiFillMessage />
                <span>Messages</span>
            </div>
            <div>
                <FaNewspaper />
                <span>News</span>
            </div>
            <div>
                <FaMusic />
                <span>Music</span>
            </div>
            <div>
                <FaWrench />
                <span>Settings</span>
            </div>
        </nav>
    </IconContext.Provider>
)
