import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, requestUsers } from '../../redux/usersReducer'
import UserItem from './UserItem'
import Loader from '../common/loader/Loader'
import {
	getUsersSelector,
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
} from '../../redux/usersSelectors'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber) => {
		this.props.requestUsers(pageNumber, this.props.pageSize)
	}

	render() {
		let pagesCount = Math.ceil(
			this.props.totalUsersCount / this.props.pageSize
		)
		let pages = []

		for (let index = 1; index <= pagesCount; index++) {
			pages.push(index)
		}

		return (
			<>
				{this.props.isFetching ? <Loader /> : null}
				<UserItem
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					users={this.props.users}
					onPageChanged={this.onPageChanged}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					isFetching={this.props.isFetching}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	users: getUsersSelector(state),
	pageSize: getPageSize(state),
	totalUsersCount: getTotalUsersCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state),
})

const mapDispatchToProps = {
	follow,
	unfollow,
	requestUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
