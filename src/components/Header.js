import React from 'react'
import { FaBeer } from 'react-icons/fa'

export const Header = () => (
    <header className="header">
        <h1>
            <FaBeer fontSize='.8rem' />
            <span>BeerBook</span>
        </h1>
        <button>Log Out</button>
    </header>
)
