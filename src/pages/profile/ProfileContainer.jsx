import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
	getProfile,
	getStatus,
	updateStatus,
	addPost,
} from '../../redux/profileReducer'
import { Profile } from './Profile'

export class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 17203
		}

		this.props.getProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		return (
			<Profile
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				addPost={this.props.addPost}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
})

const mapDispatchToProps = {
	getProfile,
	getStatus,
	updateStatus,
	addPost,
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
	// withAuthRedirect
)(ProfileContainer)
