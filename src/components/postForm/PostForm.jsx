import React from 'react'
import postFormStyle from './PostForm.module.scss'
import {
	addPostCreator,
	updateNewPostTextCreator,
} from './../../redux/state'

export const PostForm = (props) => {
	let newPostElement = React.createRef()

	let addPost = () => {
		let action = addPostCreator()
		props.dispatch(action)
	}

	const onPostChange = () => {
		let text = newPostElement.current.value
		let action = updateNewPostTextCreator(text)
		props.dispatch(action)
	}

	return (
		<div className={postFormStyle.form}>
			<textarea
				cols="30"
				rows="2"
				placeholder="What's new?"
				ref={newPostElement}
				value={props.state.newPostText}
				onChange={onPostChange}
			/>
			<button onClick={addPost} type="submit">
				Post
			</button>
		</div>
	)
}
