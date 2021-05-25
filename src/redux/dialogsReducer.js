import jobs from './../images/avatars/jobs.png'
import musk from './../images/avatars/musk.jpg'
import putin from './../images/avatars/putin.jpeg'
import trump from './../images/avatars/trump.webp'

const SEND_MESSAGE = 'SEND-MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.messageBody
			if (body.length > 0) {
				return {
					...state,
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

export const sendMessage = (messageBody) => ({
	type: SEND_MESSAGE,
	messageBody
})

export default dialogsReducer
