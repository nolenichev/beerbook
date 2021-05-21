import React from 'react'
import { connect } from 'react-redux'
import {
	follow,
	setUsers,
	unfollow,
	setCurrentPage,
	setTotalUsersCount,
	toggleLoader,
	toggleFollowingProgress,
	getUsers
} from '../../redux/usersReducer'
import UserItem from './UserItem'
import Loader from '../loader/Loader'
import { userAPI } from '../../api/api'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleLoader(true)
		userAPI
			.getUsers(this.props.currentPage, this.props.pageSize)
			.then((data) => {
				this.props.toggleLoader(false)
				this.props.setUsers(data.items)
			})
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
					toggleFollowingProgress={this.props.toggleFollowingProgress}
					isFollowingProgress={this.props.isFollowingProgress}
				/>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	totalUsersCount: state.usersPage.totalUsersCount,
	currentPage: state.usersPage.currentPage,
	isFetching: state.usersPage.isFetching,
	isFollowingProgress: state.usersPage.isFollowingProgress,
})

const mapDispatchToProps = {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleLoader,
	toggleFollowingProgress,
	getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
