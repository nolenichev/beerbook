import { userAPI } from '../api/api'
import updateObjectInArray from '../utils/objectHelpers'

const FOLLOW = 'users/FOLLOW',
	UNFOLLOW = 'users/UNFOLLOW',
	SET_USERS = 'users/SET_USERS',
	SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
	SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT',
	TOGGLE_LOADER = 'users/TOGGLE_LOADER',
	TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
	users: [],
	pageSize: 30,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: true,
				}),
			}

		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: false,
				}),
			}

		case SET_USERS:
			return { ...state, users: action.users }

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }

		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalUsersCount }

		case TOGGLE_LOADER:
			return { ...state, isFetching: action.isFetching }

		case TOGGLE_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(
							(id) => id !== action.userId
					  ),
			}

		default:
			return state
	}
}

const followSuccess = (userId) => ({ type: FOLLOW, userId })
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
const setUsers = (users) => ({ type: SET_USERS, users })

const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})

const setTotalUsersCount = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount,
})

const toggleLoader = (isFetching) => ({
	type: TOGGLE_LOADER,
	isFetching,
})

const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_FOLLOWING_PROGRESS,
	isFetching,
	userId,
})

export const requestUsers = (page, pageSize) => async (dispatch) => {
	dispatch(toggleLoader(true))
	dispatch(setCurrentPage(page))

	const data = await userAPI.getUsers(page, pageSize)

	dispatch(toggleLoader(false))
	dispatch(setUsers(data.items))
	dispatch(setTotalUsersCount(data.totalCount))
}

export const followUnfollow = async (
	dispatch,
	userId,
	apiMethod,
	actionCreator
) => {
	dispatch(toggleFollowingProgress(true, userId))

	const data = await apiMethod(userId)

	if (data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
	followUnfollow(
		dispatch,
		userId,
		userAPI.follow.bind(userAPI),
		followSuccess
	)
}

export const unfollow = (userId) => async (dispatch) => {
	followUnfollow(
		dispatch,
		userId,
		userAPI.unfollow.bind(userAPI),
		unfollowSuccess
	)
}

export default usersReducer
