import React from 'react'
import { connect } from 'react-redux'
import { Header } from './Header'
import { authMe, logout } from '../../redux/authReducer'

export class HeaderContainer extends React.Component {

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})

const mapDispatchToProps = {
	authMe,
	logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
