import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { login } from '../../redux/authReducer'
import style from './Login.module.scss'
import LoginForm from './LoginForm'

const Login = ({ login, id, isAuth, captchaUrl }) => {
	const onSubmit = (formData) => {
		login(
			formData.email,
			formData.password,
			formData.rememberMe,
			formData.captcha
		)
	}

	if (isAuth) {
		return <Redirect to={`id${id}`} />
	} else {
		return (
			<div className={style.loginForm}>
				<h2>Login</h2>
				<LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	id: state.auth.id,
	captchaUrl: state.auth.captchaUrl,
})

const mapDispatchToProps = {
	login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
