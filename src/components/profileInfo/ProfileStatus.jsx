import React, { useState, useEffect } from 'react'

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => setEditMode(true)

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e) => setStatus(e.currentTarget.value)

	return (
		<>
			{props.isOwner ? (
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
						<p onClick={activateEditMode} className="myStatus">
							{status || 'Write your new status...'}
						</p>
					)}
				</>
			) : (
				<>{status ? <p>{status}</p> : null}</>
			)}
		</>
	)
}

export default ProfileStatus
