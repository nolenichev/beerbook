import React from 'react'
import noavatar from '../../images/noavatar.png'
import Loader from '../common/loader/Loader'
import DetailProfileInfo from './DetailProfileInfo'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = React.memo((props) => {
	if (!props.profile) {
		return <Loader />
	}

	const onMainPhotoSelect = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0])
		}
	}

	return (
		<header>
			<div className="shortInfo">
				<label className={props.isOwner ? 'uploadNewPhoto' : undefined}>
					<img
						src={props.profile.photos.small || noavatar}
						alt="User avatar"
					/>
					{props.isOwner && (
						<input type="file" onChange={onMainPhotoSelect} />
					)}
				</label>
				<div>
					<h1>{props.profile.fullName}</h1>
					<ProfileStatus
						isOwner={props.isOwner}
						status={props.status}
						updateStatus={props.updateStatus}
					/>
				</div>
			</div>
			<DetailProfileInfo
				profile={props.profile}
				isOwner={props.isOwner}
				saveProfile={props.saveProfile}
			/>
		</header>
	)
})

export default ProfileInfo
