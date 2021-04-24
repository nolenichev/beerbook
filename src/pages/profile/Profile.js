import React from 'react'
import bg from './../../images/bg.jpg'
import { PostForm } from '../../components/postForm/PostForm'
import { Post } from '../../components/post/Post'

export const Profile = (props) => {
	let postsElements = props.state.posts.map((post) => (
		<Post name={post.name} text={post.text} likesCount={post.likesCount} img={post.img} key={post.id} />
	))

	return (
		<div className="profile-page">
			<img src={bg} alt="background" />
			<header>
				<h1>Nikita Olenichev</h1>
				<PostForm />
			</header>
			{postsElements}
		</div>
	)
}
