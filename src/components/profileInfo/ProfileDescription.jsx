import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { IconContext } from 'react-icons'

export const ProfileDescription = ({ handlerEditMode, profile, isOwner }) => {
	return (
		<IconContext.Provider value={{}}>
			{isOwner && (
				<button className="profileEditBtn" onClick={handlerEditMode}>
					<AiFillEdit />
				</button>
			)}
			{profile.aboutMe && (
				<div className="infoLine">
					<b>About me: </b>
					<span>{profile.aboutMe}</span>
				</div>
			)}
			{profile.lookingForAJobDescription && (
				<div className="infoLine">
					<b>Professional skills: </b>
					<span>{profile.lookingForAJobDescription}</span>
				</div>
			)}
			<div className="infoLine">
				<b>Looking for a job: </b>
				<span>{profile.lookingForAJob ? 'Yes' : 'No'}</span>
			</div>
			{Object.keys(profile.contacts)
				.filter((item) => profile.contacts[item])
				.map((key) => (
					<Contact
						key={key}
						contactTitle={key}
						contactValue={profile.contacts[key]}
					/>
				))}
		</IconContext.Provider>
	)
}

const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div className="infoLine">
			<b>{contactTitle}: </b>
			<a href={contactValue}>{contactValue}</a>
		</div>
	)
}
