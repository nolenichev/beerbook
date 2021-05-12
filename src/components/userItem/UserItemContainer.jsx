import { connect } from 'react-redux'
import {
	followCreator,
	setUsersCreator,
	unfollowCreator,
	setCurrentPageCreator,
	setTotalUsersCountCreator,
} from '../../redux/usersReducer'
import UserItem from '../../components/userItem/UserItem'

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	totalUsersCount: state.usersPage.totalUsersCount,
	currentPage: state.usersPage.currentPage,
})

const mapDispatchToProps = (dispatch) => ({
	follow: (userId) => {
		dispatch(followCreator(userId))
	},
	unfollow: (userId) => {
		dispatch(unfollowCreator(userId))
	},
	setUsers: (users) => {
		dispatch(setUsersCreator(users))
	},
	setCurrentPage: (currentPage) => {
		dispatch(setCurrentPageCreator(currentPage))
	},
	setTotalUsersCount: (totalUsersCount) => {
		dispatch(setTotalUsersCountCreator(totalUsersCount))
	},
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserItem)

export default UsersContainer
