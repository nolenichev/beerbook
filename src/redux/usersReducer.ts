import { userAPI } from '../api/api'
import { UserType } from '../types/types'
import updateObjectInArray from '../utils/objectHelpers'

const FOLLOW = 'users/FOLLOW',
	UNFOLLOW = 'users/UNFOLLOW',
	SET_USERS = 'users/SET_USERS',
	SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
	SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT',
	TOGGLE_LOADER = 'users/TOGGLE_LOADER',
	TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
	users: [] as Array<UserType>,
	pageSize: 30,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as Array<number>,
}

const usersReducer = (
	state = initialState,
	action: any
): typeof initialState => {
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

type FollowSuccessType = {
	type: typeof FOLLOW
	userId: number
}

const followSuccess = (userId: number): FollowSuccessType => ({
	type: FOLLOW,
	userId,
})

type UnfollowSuccessType = {
	type: typeof UNFOLLOW
	userId: number
}

const unfollowSuccess = (userId: number): UnfollowSuccessType => ({
	type: UNFOLLOW,
	userId,
})

type SetUsersType = {
	type: typeof SET_USERS
	users: Array<UserType>
}

const setUsers = (users: Array<UserType>): SetUsersType => ({
	type: SET_USERS,
	users,
})

type SetCurrentPageType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}

const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})

type SetTotalUsersCountType = {
	type: typeof SET_TOTAL_USERS_COUNT
	totalUsersCount: number
}

const setTotalUsersCount = (
	totalUsersCount: number
): SetTotalUsersCountType => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount,
})

type ToggleLoaderType = {
	type: typeof TOGGLE_LOADER
	isFetching: boolean
}

const toggleLoader = (isFetching: boolean): ToggleLoaderType => ({
	type: TOGGLE_LOADER,
	isFetching,
})

type ToggleFollowingProgressType = {
	type: typeof TOGGLE_FOLLOWING_PROGRESS
	isFetching: boolean
	userId: number
}

const toggleFollowingProgress = (
	isFetching: boolean,
	userId: number
): ToggleFollowingProgressType => ({
	type: TOGGLE_FOLLOWING_PROGRESS,
	isFetching,
	userId,
})

export const requestUsers =
	(page: number, pageSize: number) => async (dispatch: any) => {
		dispatch(toggleLoader(true))
		dispatch(setCurrentPage(page))

		const data = await userAPI.getUsers(page, pageSize)

		dispatch(toggleLoader(false))
		dispatch(setUsers(data.items))
		dispatch(setTotalUsersCount(data.totalCount))
	}

export const followUnfollow = async (
	dispatch: any,
	userId: number,
	apiMethod: any,
	actionCreator: any
) => {
	dispatch(toggleFollowingProgress(true, userId))

	const data = await apiMethod(userId)

	if (data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: any) => {
	followUnfollow(
		dispatch,
		userId,
		userAPI.follow.bind(userAPI),
		followSuccess
	)
}

export const unfollow = (userId: number) => async (dispatch: any) => {
	followUnfollow(
		dispatch,
		userId,
		userAPI.unfollow.bind(userAPI),
		unfollowSuccess
	)
}

export default usersReducer
