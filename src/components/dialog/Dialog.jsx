import React from 'react'
import style from './Dialog.module.scss'
import { Message } from './../message/Message'


export const Dialog = (props) => {
	let messegesElements = props.messages.map((message) => (
		<Message message={message.message} key={message.id} />
	))

	return (
		<div className={style.dialogWindow}>
			<div className={style.dialogHeader}>Elon Mask</div>
			<div className={style.dialogField}> {messegesElements}</div>
			<div className={style.inputBox}>
				<input type="text" placeholder="Type a message..." />
				<button>Send</button>
			</div>
		</div>
	)
}
