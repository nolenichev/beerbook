import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Dialogs } from './pages/dialogs/Dialogs'
import { News } from './pages/news/News'
import { Settings } from './pages/settings/Settings'
import { Music } from './pages/music/Music'
import { BrowserRouter, Route } from 'react-router-dom'
import Users from './pages/users/Users'
import ProfileContainer from './pages/profile/ProfileContainer'
import HeaderContainer from './components/header/HeaderContainer'

function App(props) {
	return (
		<BrowserRouter>
			<HeaderContainer />
			<div className="container mt10">
				<Navbar />
				<Route
					path="/profile/:userId?"
					render={() => <ProfileContainer store={props.store} />}
				/>
				<main className="main-section">
					<Route path="/users" component={Users} />
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
