import React from 'react'
import style from './Dialog.module.scss'
import { Message } from './../message/Message'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'

const Dialog = (props) => {
	let messegesElements = props.state.messages.map((message) => (
		<Message message={message.message} key={message.id} />
	))

	const sendMessage = (value) => {
		props.sendMessage(value.messageBody)
		value.messageBody = ''
	}

	if (!props.isAuth) return <Redirect to="/login" />

	return (
		<div className={style.dialogWindow}>
			<div className={style.dialogHeader}>Elon Mask</div>
			<div className={style.dialogField}>{messegesElements}</div>
			<ReduxAddMessageForm onSubmit={sendMessage} />
		</div>
	)
}

const AddMessageForm = (props) => {
	return (
		<form className={style.inputBox} onSubmit={props.handleSubmit}>
			<Field
				type="text"
				name="messageBody"
				component="textarea"
				placeholder="Type a message..."
			/>
			<button>Send</button>
		</form>
	)
}

const ReduxAddMessageForm = reduxForm({
	form: 'message',
})(AddMessageForm)

export default Dialog
