import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../components/common/Textarea/Textarea'
import { required } from '../../utils/validatiors'
import style from './Login.module.scss'

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<label>
				<h3>E-mail</h3>
				<Field
					component={Input}
					type="text"
					placeholder="expample@gmail.com"
					name="email"
					validate={[required]}
				/>
			</label>
			<label>
				<h3>Password</h3>
				<Field
					component={Input}
					type="password"
					placeholder="Your password"
					name="password"
					validate={[required]}
				/>
			</label>
			<label className={style.checkbox}>
				<Field component="input" type="checkbox" name="rememberMe" />
				<p>Remember me</p>
			</label>
			{props.captchaUrl && (
				<label>
					<h3>Captcha</h3>
					<img src={props.captchaUrl} alt="captcha" />
					<Field
						component={Input}
						type="text"
						placeholder="Write text"
						name="captcha"
						validate={[required]}
					/>
				</label>
			)}
			{props.error && (
				<div className={style.formError}>{props.error}</div>
			)}
			<button className="btn mt20">Login</button>
		</form>
	)
}

export default reduxForm({
	form: 'login',
})(LoginForm)
