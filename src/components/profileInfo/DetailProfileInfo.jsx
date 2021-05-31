import { ProfileDescription } from './ProfileDescription'
import React, { useState } from 'react'
import ProfileDataForm from './ProfileDataForm'

const DetailProfileInfo = ({ profile, isOwner, saveProfile }) => {
	const [editMode, setEditMode] = useState(false)

	const handlerEditMode = () => {
		setEditMode(!editMode)
	}

	const onSubmit = (formData) => {
		saveProfile(formData).then(() => setEditMode(!editMode))
	}

	return (
		<div className="detailInfo">
			{editMode ? (
				<ProfileDataForm
					onSubmit={onSubmit}
					initialValues={profile}
					profile={profile}
				/>
			) : (
				<ProfileDescription
					handlerEditMode={handlerEditMode}
					profile={profile}
					isOwner={isOwner}
				/>
			)}
		</div>
	)
}

export default DetailProfileInfo
