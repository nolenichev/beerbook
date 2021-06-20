import { authMe } from './authReducer'

const SET_INITIALIZED = 'app/SET_INITIALIZED'

type InitialStateType = {
	isInitalized: boolean
}

let initialState: InitialStateType = {
	isInitalized: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_INITIALIZED:
			return { ...state, isInitalized: true }

		default:
			return state
	}
}

type SetInitializedType = { type: typeof SET_INITIALIZED }

const setInitialized = (): SetInitializedType => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(authMe())

	Promise.all([promise]).then(() => {
		dispatch(setInitialized())
	})
}

export default appReducer
