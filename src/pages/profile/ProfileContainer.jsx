import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profileReducer'
import { Profile } from './Profile'

export class ProfileContainer extends Component {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)