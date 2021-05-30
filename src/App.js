import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Dialogs } from './pages/dialogs/Dialogs'
import { Settings } from './pages/settings/Settings'
import { Music } from './pages/music/Music'
import { BrowserRouter, Route } from 'react-router-dom'
import Users from './pages/users/Users'
import ProfileContainer from './pages/profile/ProfileContainer'
import HeaderContainer from './components/header/HeaderContainer'
import Login from './pages/login/Login'
import { connect } from 'react-redux'
import { initializeApp } from './redux/appReducer'
import Loader from './components/common/loader/Loader'
import withSuspense from './hoc/withSuspense'

const News = React.lazy(() => import('./pages/news/News'))

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.isInitalized) {
			return <Loader />
		}

		return (
			<BrowserRouter>
				<HeaderContainer />
				<div className="container">
					<Navbar />
					<Route
						path="/id:userId?"
						render={() => (
							<ProfileContainer store={this.props.store} />
						)}
					/>
					<main className="main-section">
						<Route path="/login" component={Login} />
						<Route path="/users" component={Users} />
						<Route
							path="/dialogs"
							render={() => <Dialogs store={this.props.store} />}
						/>
						<Route path="/news" render={withSuspense(News)} />
						<Route path="/music" component={Music} />
						<Route path="/settings" component={Settings} />
					</main>
				</div>
			</BrowserRouter>
		)
	}
}

const mapStateToProps = (state) => ({
	isInitalized: state.app.isInitalized,
})

const mapDispatchToProps = {
	initializeApp,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
