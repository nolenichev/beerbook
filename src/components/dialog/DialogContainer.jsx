import Dialog from './Dialog'
import {
	sendMessageCreator,
	updateNewMessageTextCreator,
} from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state) => ({
	state: state.dialogsPage,
})

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

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialog)
