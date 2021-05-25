import PostForm from './PostForm'
import { addPost } from '../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		state: state.profilePage,
	}
}

const mapDispatchToProps = {
	addPost,
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default PostFormContainer
