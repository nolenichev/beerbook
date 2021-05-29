import React, { useState } from 'react'

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	const activateEditMode = () => setEditMode(true)
	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}
	const onStatusChange = (e) => setStatus(e.currentTarget.value)

	return (
		<>
			{editMode ? (
				<input
					type="text"
					value={status}
					onBlur={deactivateEditMode}
					onChange={onStatusChange}
					onSubmit={deactivateEditMode}
					autoFocus={true}
				/>
			) : (
				<p onClick={activateEditMode}>
					{status || 'Write your new status...'}
				</p>
			)}
		</>
	)
}

export default ProfileStatus
