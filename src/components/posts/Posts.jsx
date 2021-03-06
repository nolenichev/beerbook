import React from 'react'
import { Post } from '../post/Post'

export const Posts = React.memo((props) => {
	let postsElements = props.store
		.getState()
		.profilePage.posts.map((post) => (
			<Post
				name={post.name}
				text={post.text}
				likesCount={post.likesCount}
				img={post.img}
				key={post.id}
			/>
		))

	return <div className="posts">{postsElements}</div>
})
