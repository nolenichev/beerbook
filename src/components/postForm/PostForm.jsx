import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './PostForm.module.scss'
import { maxLength, required } from '../../utils/validatiors'
import { Textarea } from '../common/Textarea/Textarea'

const maxLength20 = maxLength(20)

const PostForm = (props) => {
	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<Field
				name="postField"
				cols="30"
				rows="2"
				component={Textarea}
				placeholder="What's new?"
				validate={[required, maxLength20]}
			/>
			<button type="submit">Post</button>
		</form>
	)
}

const ReduxPostForm = reduxForm({
	form: 'post',
})(PostForm)

export default ReduxPostForm
