import React from 'react'
import { connect } from 'react-redux'
import {
	follow,
	setUsers,
	unfollow,
	setCurrentPage,
	setTotalUsersCount,
	toggleLoader,
} from '../../redux/usersReducer'
import * as axios from 'axios'
import UserItem from './UserItem'
import Loader from '../loader/Loader'
import { getUsers } from '../../api/api'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleLoader(true)

		getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
			console.log(this.props.users)
			this.props.toggleLoader(false)
			this.props.setUsers(response.data.items)
			console.log(this.props.users)
			this.props.setTotalUsersCount(response.data.totalCount)
		})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleLoader(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
				{ withCredentials: true }
			)
			.then((response) => {
				this.props.toggleLoader(false)
				this.props.setUsers(response.data.items)
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
})

const mapDispatchToProps = {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleLoader,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
