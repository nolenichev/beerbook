import { applyMiddleware, combineReducers, createStore } from 'redux'
import authReducer from './authReducer'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import thunk from 'redux-thunk'

let reducers = combineReducers({
	profilePage: profileReducer,
	usersPage: usersReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store
