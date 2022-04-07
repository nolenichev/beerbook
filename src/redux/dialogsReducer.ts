import jobs from './../images/avatars/jobs.png'
import musk from './../images/avatars/musk.jpg'
import trump from './../images/avatars/trump.webp'

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

type DialogType = {
	id: number
	userId: number
	name: string
	avatar: string
}

type MessageType = {
	id: number
	message: string
}

let initialState = {
	dialogs: [
		{ id: 1, userId: 1, name: 'Elon Mask', avatar: musk },
		{ id: 2, userId: 2, name: 'Donald Trump', avatar: trump },
		{ id: 3, userId: 3, name: 'Steve Jobs', avatar: jobs },
	] as Array<DialogType>,
	messages: [
		{ id: 1, message: 'Hi!' },
		{ id: 2, message: 'How is it going?' },
	] as Array<MessageType>,
}

type InitialStateType = typeof initialState

const dialogsReducer = (
	state = initialState,
	action: any
): InitialStateType => {
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

type SendMessageType = {
	type: typeof SEND_MESSAGE
	messageBody: string
}

export const sendMessage = (messageBody: string): SendMessageType => ({
	type: SEND_MESSAGE,
	messageBody,
})

export default dialogsReducer
