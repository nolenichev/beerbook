import React from 'react'
import PostForm from './PostForm'
import {
	addPostCreator,
	updateNewPostTextCreator,
} from '../../redux/profileReducer'

export const PostFormContainer = (props) => {
	let addPost = () => {
		let action = addPostCreator()
		props.store.dispatch(action)
	}

	const updateNewPostText = (text) => {
		let action = updateNewPostTextCreator(text)
		props.store.dispatch(action)
	}

	return (
		<PostForm
			updateNewPostText={updateNewPostText}
			addPost={addPost}
			state={props.store.getState()}
		/>
	)
}
