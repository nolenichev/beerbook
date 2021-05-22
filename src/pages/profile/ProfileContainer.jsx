import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { getProfile } from '../../redux/profileReducer'
import { Profile } from './Profile'

export class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 2
		}
		this.props.getProfile(userId)
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

const mapDispatchToProps = {
	getProfile,
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	// withAuthRedirect
)(ProfileContainer)
