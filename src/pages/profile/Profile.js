import React from 'react'
import PostFormContainer from '../../components/postForm/PostFormContainer'
import { Posts } from '../../components/posts/Posts'
import ProfileInfo from '../../components/profileInfo/ProfileInfo'

export const Profile = (props) => {
	const addPost = (value) => {
		props.addPost(value.postField)
		value.postField = ''
	}

	return (
		<div className="profilePage">
			<ProfileInfo
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				isOwner={props.isOwner}
				savePhoto={props.savePhoto}
				saveProfile={props.saveProfile}
			/>
			<PostFormContainer onSubmit={addPost} />
			<Posts {...props} />
		</div>
	)
}
