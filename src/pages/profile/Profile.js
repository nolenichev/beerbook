import React from 'react'
import PostFormContainer from '../../components/postForm/PostFormContainer'
import { Posts } from '../../components/posts/Posts'
import ProfileInfo from '../../components/profileInfo/ProfileInfo'

export const Profile = (props) => {
	return (
		<div className="profile-page">
			<ProfileInfo profile={props.profile} />
			<PostFormContainer />
			<Posts {...props} />
		</div>
	)
}
