import jobs from './../images/avatars/jobs.png'
import musk from './../images/avatars/musk.jpg'
import putin from './../images/avatars/putin.jpeg'
import trump from './../images/avatars/trump.webp'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'

let store = {
	_state: {
		profilePage: {
			posts: [
				{
					id: 1,
					name: 'Nikita',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
					img:
						'https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg?size=626&ext=jpg',
					likesCount: 10,
				},
				{
					id: 2,
					name: 'Random Titile',
					img:
						'https://s23527.pcdn.co/wp-content/uploads/2019/12/Downside-Up-745x449.jpg.optimal.jpg',
					text:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum corrupti eligendi doloribus minus explicabo ad voluptatibus ab officia quidem dolor eius vitae, nisi voluptas, impedit beatae facilis. Omnis, delectus mollitia?',
					likesCount: 5,
				},
				{
					id: 3,
					name: 'LOL KEK',
					img: null,
					text:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
					likesCount: 5,
				},
			],
			newPostText: '',
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, userId: 1, name: 'Elon Mask', avatar: musk },
				{ id: 2, userId: 2, name: 'Donald Trump', avatar: trump },
				{ id: 3, userId: 3, name: 'Vladimir Putin', avatar: putin },
				{ id: 4, userId: 4, name: 'Steve Jobs', avatar: jobs },
			],
			messages: [
				{ id: 1, message: 'Hi!' },
				{ id: 2, message: 'How is it going?' },
			],
			sidebar: {},
			newMessageText: '',
		},
		sidebar: {},
	},

	_callSubscriber() {
		console.log('State Changed')
	},

	getState() {
		return this._state
	},

	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(
			this._state.profilePage,
			action
		)
		this._state.dialogsPage = dialogsReducer(
			this._state.dialogsPage,
			action
		)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)
		this._callSubscriber(this._state)
	},
}

export default store
window.store = store
