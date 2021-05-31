import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './PostForm.module.scss'
import { Textarea } from '../common/Textarea/Textarea'

const PostForm = (props) => {
	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<Field
				name="postField"
				cols="30"
				rows="2"
				component={Textarea}
				placeholder="What's new?"
			/>
			<button type="submit">Post</button>
		</form>
	)
}

export default reduxForm({
	form: 'post',
})(PostForm)
