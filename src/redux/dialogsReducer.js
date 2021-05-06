import jobs from './../images/avatars/jobs.png'
import musk from './../images/avatars/musk.jpg'
import putin from './../images/avatars/putin.jpeg'
import trump from './../images/avatars/trump.webp'

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			return { ...state, newMessageText: action.text }

		case SEND_MESSAGE:
			let body = state.newMessageText
			if (body.length > 0) {
				return {
					...state,
					newMessageText: '',
					messages: [
						...state.messages,
						{
							message: body,
							id: 3,
						},
					],
				}
			}
			return state

		default:
			return state
	}
}

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE,
})

export const updateNewMessageTextCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	text: text,
})

export default dialogsReducer
