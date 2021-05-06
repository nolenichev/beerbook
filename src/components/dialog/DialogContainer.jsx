import Dialog from './Dialog'
import {
	sendMessageCreator,
	updateNewMessageTextCreator,
} from '../../redux/dialogsReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessage: (text) => {
			dispatch(updateNewMessageTextCreator(text))
		},
		sendMessage: () => {
			dispatch(sendMessageCreator())
		},
	}
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer
