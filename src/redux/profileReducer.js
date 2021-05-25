import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST',
	UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
	SET_USER_PROFILE = 'SET_USER_PROFILE',
	SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
	posts: [
		{
			id: 1,
			name: 'Nikita',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
			img: 'https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg?size=626&ext=jpg',
			likesCount: 10,
		},
		{
			id: 2,
			name: 'Nikita',
			img: 'https://s23527.pcdn.co/wp-content/uploads/2019/12/Downside-Up-745x449.jpg.optimal.jpg',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum corrupti eligendi doloribus minus explicabo ad voluptatibus ab officia quidem dolor eius vitae, nisi voluptas, impedit beatae facilis. Omnis, delectus mollitia?',
			likesCount: 5,
		},
		{
			id: 3,
			name: 'Nikita',
			img: null,
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
			likesCount: 5,
		},
	],
	newPostText: '',
	profile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT:
			return { ...state, newPostText: action.text }

		case ADD_POST:
			let postText = state.newPostText
			if (postText.length > 0) {
				return {
					...state,
					newPostText: '',
					posts: [
						...state.posts,
						{
							id: 4,
							name: 'Nikita',
							img: null,
							text: postText,
							likesCount: 0,
						},
					],
				}
			}
			return state

		case SET_USER_STATUS:
			return { ...state, status: action.status }

		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }

		default:
			return state
	}
}

export const addPost = () => ({
	type: ADD_POST,
})

export const updateNewPostText = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	text,
})

const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
})

const setUserStatus = (status) => ({
	type: SET_USER_STATUS,
	status,
})

export const getProfile = (profile) => (dispatch) => {
	profileAPI.getProfile(profile).then((data) => {
		dispatch(setUserProfile(data))
	})
}

export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then((data) => {
		dispatch(setUserStatus(data))
	})
}

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then((data) => {
		if (data.resultCode === 0) {
			dispatch(setUserStatus(status))
			console.log('Status updated')
		} else {
			console.log(`Something went wrong...`)
		}
	})
}

export default profileReducer
