import React from 'react'
import beerIcon from './../../images/beer.svg'

export const Header = () => (
    <header className="header">
        <div>
            <div>
                <img src={beerIcon} alt="beer"/>
                <span>BeerBook</span>
            </div>
            <button>Log Out</button>
        </div>
    </header>
)
