import React from 'react'
import Dialog from './Dialog'
import {
	sendMessageCreator,
	updateNewMessageTextCreator,
} from '../../redux/dialogsReducer'

const DialogContainer = (props) => {
	
	let updateNewMessage = (text) => {
		let action = updateNewMessageTextCreator(text)
		props.dispatch(action)
	}

	let sendMessage = () => {
		let action = sendMessageCreator()
		props.dispatch(action)
	}

	return (
		<Dialog sendMessage={sendMessage} updateNewMessage={updateNewMessage} state={props.store.getState().dialogsPage} />
	)
}

export default DialogContainer
