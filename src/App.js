import React from 'react'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './pages/profile/Profile'
import { Dialogs } from './pages/dialogs/Dialogs'
import { News } from './pages/news/News'
import { Settings } from './pages/settings/Settings'
import { Music } from './pages/music/Music'
import { BrowserRouter, Route } from 'react-router-dom'

function App(props) {
	return (
		<BrowserRouter>
			<Header />
			<div className="container mt10">
				<Navbar />
				<Route
					path="/profile"
					render={() => <Profile store={props.store} />}
				/>
				<main className="main-section">
					<Route
						path="/dialogs"
						render={() => <Dialogs store={props.store} />}
					/>
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</main>
			</div>
		</BrowserRouter>
	)
}

export default App
