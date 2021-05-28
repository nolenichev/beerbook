import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { login } from '../../redux/authReducer'
import style from './Login.module.scss'
import LoginForm from './LoginForm'

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={`id${props.id}`} />
	} else {
		return (
			<div className={style.loginForm}>
				<h2>Login</h2>
				<LoginForm onSubmit={onSubmit} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	id: state.auth.id,
})

const mapDispatchToProps = {
	login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
