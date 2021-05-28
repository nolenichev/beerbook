import { authMe } from './authReducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
	isInitalized: false,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return { ...state, isInitalized: true }

		default:
			return state
	}
}

const setInitialized = () => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(authMe())
	Promise.all([promise]).then(() => {
		dispatch(setInitialized())
	})
}

export default appReducer
