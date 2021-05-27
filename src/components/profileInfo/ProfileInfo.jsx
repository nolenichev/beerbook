import React from 'react'
import noavatar from '../../images/noavatar.png'
import Loader from '../common/loader/Loader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Loader />
	}

	return (
		<header>
			<img
				src={
					props.profile.photos.small
						? props.profile.photos.small
						: noavatar
				}
				alt="User avatar"
			/>
			<div>
				<h1>{props.profile.fullName}</h1>
				<ProfileStatus
					status={props.status}
					updateStatus={props.updateStatus}
				/>
			</div>
		</header>
	)
}

export default ProfileInfo
