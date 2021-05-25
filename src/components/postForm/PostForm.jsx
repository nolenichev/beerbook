import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './PostForm.module.scss'

const PostForm = (props) => {
	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<Field
				name="postField"
				cols="30"
				rows="2"
				component="textarea"
				placeholder="What's new?"
			/>
			<button>Post</button>
		</form>
	)
}

const ReduxPostForm = reduxForm({
	form: 'post',
})(PostForm)

export default ReduxPostForm
