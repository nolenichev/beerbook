import React from 'react'
import bg from './../../images/bg.jpg'
import PostFormContainer from '../../components/postForm/PostFormContainer'
import { Posts } from './../../components/posts/Posts'

export const Profile = (props) => {
	return (
		<div className="profile-page">
			<img src={bg} alt="background" />
			<header>
				<h1>Nikita Olenichev</h1>
				<PostFormContainer />
			</header>
			<Posts store={props.store} />
		</div>
	)
}
