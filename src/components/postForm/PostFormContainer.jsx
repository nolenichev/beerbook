import PostForm from './PostForm'
import {
	addPostCreator,
	updateNewPostTextCreator,
} from '../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		state: state.profilePage,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostCreator())
		},
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextCreator(text))
		},
	}
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default PostFormContainer
