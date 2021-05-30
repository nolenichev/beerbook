import profileReducer, { addPost, deletePost } from './profileReducer'

const state = {
	posts: [
		{
			id: 1,
			name: 'Nikita',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
			img: 'https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg?size=626&ext=jpg',
			likesCount: 10,
		},
		{
			id: 2,
			name: 'Nikita',
			img: 'https://s23527.pcdn.co/wp-content/uploads/2019/12/Downside-Up-745x449.jpg.optimal.jpg',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
			likesCount: 5,
		},
		{
			id: 3,
			name: 'Nikita',
			img: null,
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
			likesCount: 5,
		},
	],
}

it('new post should be added', () => {
	const action = addPost('new post')
	const newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(4)
	expect(newState.posts[3].text).toBe('new post')
})

it('text of last post should be correct', () => {
	const action = addPost('new post')
	const newState = profileReducer(state, action)

	expect(newState.posts[3].text).toBe('new post')
})

it('after deleting length of post should be decrement', () => {
	const action = deletePost(1)
	const newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(2)
})
