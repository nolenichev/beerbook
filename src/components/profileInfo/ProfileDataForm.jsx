import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../common/Textarea/Textarea'

const ProfileDataForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<label>
				<h4>Fullname</h4>
				<Field
					name="fullName"
					component={Input}
					placeholder="Yorr fullname"
					type="text"
				/>
			</label>
			<label>
				<h4>About me</h4>
				<Field
					name="aboutMe"
					component={Textarea}
					placeholder="Let's talk about you"
					type="text"
				/>
			</label>
			<label>
				<h4>Skills</h4>
				<Field
					name="lookingForAJobDescription"
					component={Textarea}
					placeholder="Let's talk about your skills"
					type="text"
				/>
			</label>
			<label className="checkboxInput">
				<h4>Looking a job</h4>
				<Field
					name="lookingForAJob"
					component={Input}
					type="checkbox"
				/>
			</label>
			<label className="contactsInput">
				<h4>Contacts</h4>
				{Object.keys(props.profile.contacts).map((key) => (
					<Field name={`contacts.${key}`} component={Input} type="text" placeholder={key} key={key} />
				))}
			</label>
			{props.error && <div className="errorMsg">{props.error}</div> }
			<button type="submit" className="btn mt10">
				Save changes
			</button>
		</form>
	)
}

export default reduxForm({
	form: 'profileInfoForm',
})(ProfileDataForm)
