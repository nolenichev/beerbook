import PostForm from './PostForm'
import {
	addPost,
	updateNewPostText,
} from '../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		state: state.profilePage,
	}
}

const mapDispatchToProps =  {
	addPost,
	updateNewPostText,
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default PostFormContainer
