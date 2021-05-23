import React from 'react'

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	}

	editModeOn = () => {
		this.setState({
			editMode: true,
		})
	}

	editModeOff = () => {
		this.setState({
			editMode: false,
		})
	}

	render() {
		return (
			<>
				{this.state.editMode ? (
					<input
						type="text"
						value={this.props.status}
						onBlur={this.editModeOff}
						autoFocus={true}
					/>
				) : (
					<p onClick={this.editModeOn}>
						{this.props.status}
					</p>
				)}
			</>
		)
	}
}

export default ProfileStatus
