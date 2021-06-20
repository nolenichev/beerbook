import { stopSubmit } from 'redux-form'
import { profileAPI } from '../api/api'
import { PhotosType, PostType, ProfileType } from '../types/types'

const ADD_POST = 'profile/ADD_POST',
	DELETE_POST = 'profile/DELETE_POST',
	SET_USER_PROFILE = 'profile/SET_USER_PROFILE',
	SET_USER_STATUS = 'profile/SET_USER_STATUS',
	SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

const initialState = {
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
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
			likesCount: 5,
		},
		{
			id: 3,
			name: 'Nikita',
			img: null,
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
			likesCount: 5,
		},
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: null as string | null,
}

const profileReducer = (
	state = initialState,
	action: any
): typeof initialState => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [
					...state.posts,
					{
						id: 4,
						name: 'Nikita',
						img: null,
						text: action.postText,
						likesCount: 0,
					},
				],
			}

		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.postId),
			}

		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: {
					...state.profile,
					photos: action.photos,
				} as ProfileType,
			}

		case SET_USER_STATUS:
			return { ...state, status: action.status }

		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }

		default:
			return state
	}
}

type SetUserProfileType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}

const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
	type: SET_USER_PROFILE,
	profile,
})

type SetUserStatusType = {
	type: typeof SET_USER_STATUS
	status: string
}

const setUserStatus = (status: string): SetUserStatusType => ({
	type: SET_USER_STATUS,
	status,
})

type SavePhotoSuccessType = {
	type: typeof SAVE_PHOTO_SUCCESS
	photos: PhotosType
}

const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
	type: SAVE_PHOTO_SUCCESS,
	photos,
})

type AddPostType = {
	type: typeof ADD_POST
	postText: string
}

export const addPost = (postText: string): AddPostType => ({
	type: ADD_POST,
	postText,
})

type DeletePostType = {
	type: typeof DELETE_POST
	postId: number
}

export const deletePost = (postId: number): DeletePostType => ({
	type: DELETE_POST,
	postId,
})

export const getProfile = (userId: number) => async (dispatch: any) => {
	const data = await profileAPI.getProfile(userId)

	dispatch(setUserProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
	const data = await profileAPI.getStatus(userId)

	dispatch(setUserStatus(data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
	try {
		const data = await profileAPI.updateStatus(status)

		if (data.resultCode === 0) {
			dispatch(setUserStatus(status))
		}
	} catch (error) {
		console.log(error)
	}
}

export const savePhoto = (file: any) => async (dispatch: any) => {
	const data = await profileAPI.savePhoto(file)

	if (data.resultCode === 0) {
		dispatch(savePhotoSuccess(data.data.photos))
	}
}

export const saveProfile =
	(profile: ProfileType) => async (dispatch: any, getState: any) => {
		const userId = getState().auth.id
		const data = await profileAPI.saveProfile(profile)

		if (data.resultCode === 0) {
			dispatch(getProfile(userId))
		} else {
			const errorMessage =
				data.messages.length > 0 ? data.messages[0] : ''

			dispatch(stopSubmit('profileInfoForm', { _error: errorMessage }))
			return Promise.reject(errorMessage)
		}
	}

export default profileReducer
