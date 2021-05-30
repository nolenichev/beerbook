import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import authReducer from './authReducer'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import appReducer from './appReducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
	profilePage: profileReducer,
	usersPage: usersReducer,
	dialogsPage: dialogsReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
