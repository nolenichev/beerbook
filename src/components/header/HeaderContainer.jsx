import React from 'react'
import { connect } from 'react-redux'
import { Header } from './Header'
import { authMe } from '../../redux/authReducer'

export class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authMe()
	}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

const mapDispatchToProps = {
	authMe,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
