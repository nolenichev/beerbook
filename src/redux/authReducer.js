import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'

const initialState = {
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

export const authMe = () => async (dispatch) => {
	const data = await authAPI.authMe()

	if (data.resultCode === 0) {
		const { id, email, login } = data.data
		dispatch(setAuthUserData(id, email, login, true))
	}
}

export const login = (email, password, rememberMe) => async (dispatch) => {
	const data = await authAPI.login(email, password, rememberMe)

	if (data.resultCode === 0) {
		dispatch(authMe())
	} else {
		const errorMessage = data.messages.length > 0 ? data.messages[0] : ''

		dispatch(
			stopSubmit('login', {
				_error: errorMessage,
			})
		)
	}
}

export const logout = () => async (dispatch) => {
	const data = await authAPI.logout()

	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}

export default authReducer
