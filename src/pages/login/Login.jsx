import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { authAPI } from '../../api/api'
import style from './Login.module.scss'

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<label>
				<h3>E-mail</h3>
				<Field
					component="input"
					type="text"
					placeholder="expample@gmail.com"
					name="email"
				/>
			</label>
			<label>
				<h3>Password</h3>
				<Field
					component="input"
					type="password"
					placeholder="Your password"
					name="password"
				/>
			</label>
			<label className={style.checkbox}>
				<Field component="input" type="checkbox" name="rememberMe" />
				<p>Remember me</p>
			</label>
			<button className="btn mt20">Login</button>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login',
})(LoginForm)

const Login = () => {
	const onSubmit = (formData) => {
		console.log(formData)
		authAPI.login(formData.email, formData.password, formData.rememberMe)
	}

	return (
		<div className={style.loginForm}>
			<h2>Login</h2>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

export default Login
