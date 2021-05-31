import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import {
	addPost,
	getProfile,
	getStatus,
	updateStatus,
	savePhoto,
	saveProfile,
} from '../../redux/profileReducer'
import { Profile } from './Profile'

class ProfileContainer extends React.PureComponent {
	refreshProfile() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.autrizedUserId
		}

		this.props.getProfile(userId)
		this.props.getStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {
		return (
			<Profile
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				addPost={this.props.addPost}
				isOwner={
					Number(this.props.match.params.userId) ===
					this.props.autrizedUserId
				}
				savePhoto={this.props.savePhoto}
				safeProfile={this.props.saveProfile}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	autrizedUserId: state.auth.id,
	isAuth: state.auth.isAuth,
})

const mapDispatchToProps = {
	getProfile,
	getStatus,
	updateStatus,
	addPost,
	savePhoto,
	saveProfile,
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(ProfileContainer)
