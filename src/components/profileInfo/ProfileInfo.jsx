import React from 'react'
// import noavatar from '../../images/noavatar.png'
import Loader from '../loader/Loader'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader />
    }

	return (
		<header>
			<img src={props.profile.photos.large} alt="User avatar" />
			<div>
				<h1>{props.profile.fullName}</h1>
				<p>{props.profile.aboutMe}</p>
			</div>
		</header>
	)
}

export default ProfileInfo
