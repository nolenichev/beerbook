import { connect } from 'react-redux'
import { followCreator, setUsersCreator, unfollowCreator } from '../../redux/usersReducer'
import UserItem from '../../components/userItem/UserItem'

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
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
    }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserItem)

export default UsersContainer
