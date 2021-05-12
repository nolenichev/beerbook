const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, isFollowed: true }
					}
					return user
				}),
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, isFollowed: false }
					}
					return user
				}),
			}

		case SET_USERS:
			return { ...state, users: action.users }

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }

		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalUsersCount }

		default:
			return state
	}
}

export const followCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersCreator = (users) => ({ type: SET_USERS, users })
export const setCurrentPageCreator = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})
export const setTotalUsersCountCreator = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount,
})

export default usersReducer