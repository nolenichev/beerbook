import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../api/api'

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA',
	GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

type InitialStateType = typeof initialState

const initialState = {
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false,
	captchaUrl: null as string | null,
}

const authReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return { ...state, ...action.payload }

		case GET_CAPTCHA_URL_SUCCESS:
			return { ...state, captchaUrl: action.captchaUrl }

		default:
			return state
	}
}

type GetCaptchaUrlSuccessType = {
	type: typeof GET_CAPTCHA_URL_SUCCESS
	captchaUrl: string
}

const getCaptchaUrlSuccess = (
	captchaUrl: string
): GetCaptchaUrlSuccessType => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	captchaUrl,
})

type SetAuthUserDataPayloadType = {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}

type SetAuthUserDataType = {
	type: typeof SET_AUTH_USER_DATA
	payload: SetAuthUserDataPayloadType
}

const setAuthUserData = (
	id: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean
): SetAuthUserDataType => ({
	type: SET_AUTH_USER_DATA,
	payload: {
		id,
		email,
		login,
		isAuth,
	},
})

export const authMe = () => async (dispatch: any) => {
	const data = await authAPI.authMe()

	if (data.resultCode === 0) {
		const { id, email, login } = data.data
		dispatch(setAuthUserData(id, email, login, true))
	}
}

export const login =
	(email: string, password: string, rememberMe: boolean, captcha: string) =>
	async (dispatch: any) => {
		const data = await authAPI.login(email, password, rememberMe, captcha)

		if (data.resultCode === 0) {
			dispatch(authMe())
		} else {
			if (data.resultCode === 10) {
				dispatch(getCaptchaUrl())
			}
			const errorMessage =
				data.messages.length > 0 ? data.messages[0] : ''

			dispatch(
				stopSubmit('login', {
					_error: errorMessage,
				})
			)
		}
	}

export const getCaptchaUrl = () => async (dispatch: any) => {
	const data = await securityAPI.getCaptchaUrl()

	dispatch(getCaptchaUrlSuccess(data.url))
}

export const logout = () => async (dispatch: any) => {
	const data = await authAPI.logout()

	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}

export default authReducer
