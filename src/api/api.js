import * as axios from 'axios'

const instanse = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '78e344c0-c560-4361-b743-db91f3b192fd',
	},
})

export const userAPI = {
	getUsers: (currentPage, pageSize) => {
		return instanse
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},

	follow(id) {
		return instanse.post(`follow/${id}`).then((response) => response.data)
	},

	unfollow(id) {
		return instanse.delete(`follow/${id}`).then((response) => response.data)
	},

	getProfile(id) {
		return instanse.get(`profile/${id}`).then((response) => response.data)
	},
}

export const authAPI = {
	authMe() {
		return instanse.get('/auth/me').then((response) => response.data)
	},
}
