import jobs from './../images/avatars/jobs.png'
import musk from './../images/avatars/musk.jpg'
import putin from './../images/avatars/putin.jpeg'
import trump from './../images/avatars/trump.webp'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
			newMessageText: '',
		},
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

	_addPost() {
		if (this._state.profilePage.newPostText.length > 0) {
			let postText = this._state.profilePage.newPostText
			let newPost = {
				id: 4,
				name: 'Nikita',
				img: null,
				text: postText,
				likesCount: 0,
			}
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this.state)
		}
	},

	_updateNewPostText(text) {
		this._state.profilePage.newPostText = text
		this._callSubscriber(this._state)
	},

	_updateNewMessageText(text) {
		this._state.dialogsPage.newMessageText = text
		this._callSubscriber(this._state)
	},

	sendMessage() {
		if (this._state.dialogsPage.newMessageText.length > 0) {
			let messageText = this._state.dialogsPage.newMessageText
			let newMessage = {
				message: messageText,
				id: 3,
			}
			this._state.dialogsPage.messages.push(newMessage)
			this._state.dialogsPage.newMessageText = ''
			this._callSubscriber(this._state)
		}
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			this._addPost()
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._updateNewPostText(action.text)
		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._updateNewMessageText(action.text)
		} else if (action.type === SEND_MESSAGE) {
			this.sendMessage()
		}
	},
}

export const addPostCreator = () => ({
	type: ADD_POST,
})

export const updateNewPostTextCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	text: text,
})

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE,
})

export const updateNewMessageTextCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	text: text,
})

export default store
window.store = store
