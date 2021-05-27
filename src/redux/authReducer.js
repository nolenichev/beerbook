import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return { ...state, ...action.payload }

		default:
			return state
	}
}

const setAuthUserData = (id, email, login, isAuth) => ({
	type: SET_AUTH_USER_DATA,
	payload: {
		id,
		email,
		login,
		isAuth,
	},
})

export const authMe = () => (dispatch) => {
	authAPI.authMe().then((data) => {
		if (data.resultCode === 0) {
			let { id, email, login } = data.data
			dispatch(setAuthUserData(id, email, login, true))
		}
	})
}

export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe).then((data) => {
		if (data.resultCode === 0) {
			dispatch(authMe())
		} else {
			const errorMessage =
				data.messages.length > 0 ? data.messages[0] : ''
			dispatch(
				stopSubmit('login', {
					_error: errorMessage,
				})
			)
		}
	})
}

export const logout = () => (dispatch) => {
	authAPI.logout().then((data) => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}

export default authReducer
