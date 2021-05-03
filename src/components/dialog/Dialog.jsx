import React from 'react'
import style from './Dialog.module.scss'
import { Message } from './../message/Message'
import {
	sendMessageCreator,
	updateNewMessageTextCreator,
} from '../../redux/state'

const MIN_TEXTAREA_HEIGHT = 30

export const Dialog = (props) => {
	let messegesElements = props.state.messages.map((message) => (
		<Message message={message.message} key={message.id} />
	))

	let newMessageElement = React.createRef()

	React.useLayoutEffect(() => {
		newMessageElement.current.style.height = `${Math.max(
			newMessageElement.current.scrollHeight,
			MIN_TEXTAREA_HEIGHT
		)}px`
	})

	let updateNewMessage = () => {
		let text = newMessageElement.current.value
		let action = updateNewMessageTextCreator(text)
		props.dispatch(action)
	}

	let sendMessage = () => {
		let action = sendMessageCreator()
		props.dispatch(action)
		newMessageElement.current.style.height = 0
	}

	return (
		<div className={style.dialogWindow}>
			<div className={style.dialogHeader}>Elon Mask</div>
			<div className={style.dialogField}>{messegesElements}</div>
			<div className={style.inputBox}>
				<textarea
					type="text"
					placeholder="Type a message..."
					value={props.state.newMessageText}
					onChange={updateNewMessage}
					ref={newMessageElement}
					style={{ height: MIN_TEXTAREA_HEIGHT }}
				/>
				<button onClick={sendMessage}>Send</button>
			</div>
		</div>
	)
}
