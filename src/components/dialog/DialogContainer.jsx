import Dialog from './Dialog'
import { sendMessage } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state) => ({
	state: state.dialogsPage,
})

const mapDispatchToProps = {
	sendMessage,
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialog)
