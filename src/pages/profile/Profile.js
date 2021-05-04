import React from 'react'
import bg from './../../images/bg.jpg'
import { Post } from '../../components/post/Post'
import { PostFormContainer } from '../../components/postForm/PostFormContainer'

export const Profile = (props) => {
	let postsElements = props.store.getState().profilePage.posts.map((post) => (
		<Post
			name={post.name}
			text={post.text}
			likesCount={post.likesCount}
			img={post.img}
			key={post.id}
		/>
	))

	return (
		<div className="profile-page">
			<img src={bg} alt="background" />
			<header>
				<h1>Nikita Olenichev</h1>
				<PostFormContainer store={props.store} />
			</header>
			<div className="posts">{postsElements}</div>
		</div>
	)
}
