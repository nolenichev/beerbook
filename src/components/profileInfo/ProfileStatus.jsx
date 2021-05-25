import React from 'react'

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
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
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			})
		}
	}

	render() {
		return (
			<>
				{this.state.editMode ? (
					<input
						type="text"
						value={this.state.status}
						onBlur={this.editModeOff}
						onChange={this.onStatusChange}
						onSubmit={this.editModeOff}
						autoFocus={true}
					/>
				) : (
					<p onClick={this.editModeOn}>
						{this.props.status || 'Write your new status...'}
					</p>
				)}
			</>
		)
	}
}

export default ProfileStatus
