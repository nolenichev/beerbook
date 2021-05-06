import React from 'react'
import style from './PostForm.module.scss'

const PostForm = (props) => {
	let newPostElement = React.createRef()

	let onAddPost = () => {
		props.addPost()
	}

	const onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}

	return (
		<div className={style.form}>
			<textarea
				cols="30"
				rows="2"
				placeholder="What's new?"
				ref={newPostElement}
				value={props.state.newPostText}
				onChange={onPostChange}
			/>
			<button onClick={onAddPost} type="submit">
				Post
			</button>
		</div>
	)
}

export default PostForm
