import { combineReducers, createStore } from 'redux'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	usersPage: usersReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
})

let store = createStore(reducers)

export default store
