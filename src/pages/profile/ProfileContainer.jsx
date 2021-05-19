import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setUserProfile } from '../../redux/profileReducer'
import { Profile } from './Profile'

export class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 2
		}
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/profile/${userId}`
			)
			.then((response) => {
				this.props.setUserProfile(response.data)
			})
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
	}
}

const mapDispatchToProps = {
	setUserProfile,
}

const ContainerComponentWithURLData = withRouter(ProfileContainer)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContainerComponentWithURLData)
