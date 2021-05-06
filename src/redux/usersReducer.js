import musk from './../images/avatars/musk.jpg'
import jobs from './../images/avatars/jobs.png'
import putin from './../images/avatars/putin.jpeg'
import trump from './../images/avatars/trump.webp'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
	users: [
        {
            id: 1,
            fullName: 'Putin',
            avatar: putin,
            jobTitle: 'God',
            location: { country: 'Czech Republic', city: 'Prague' },
            isFollowed: true,
        },
        {
            id: 2,
            fullName: 'Steve',
            avatar: jobs,
            jobTitle: 'Apple CEO',
            location: { country: 'Czech Republic', city: 'Prague' },
            isFollowed: false,
        },
        {
            id: 3,
            fullName: 'Elon',
            avatar: musk,
            jobTitle: 'Frontend Developer',
            location: { country: 'Czech Republic', city: 'Prague' },
            isFollowed: false,
        },
        {
            id: 4,
            fullName: 'Donald',
            avatar: trump,
            jobTitle: 'Mr President',
            location: { country: 'Czech Republic', city: 'Prague' },
            isFollowed: false,
        },
    ],
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
			return { ...state, users: [...state.users, ...action.users] }

		default:
			return state
	}
}

export const followCreator = (userId) => ({ type: FOLLOW, userId})
export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId})
export const setUsersCreator = (users) => ({ type: SET_USERS, users })

export default usersReducer
