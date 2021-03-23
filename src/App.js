import React from 'react'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Profile } from './pages/Profile'

function App() {
    return (
        <div>
            <Header />
            <div className="container mt10">
                <Navbar />
                <Profile />
            </div>
        </div>
    )
}


export default App
