import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '78e344c0-c560-4361-b743-db91f3b192fd',
	},
})

export const userAPI = {
	getUsers: (currentPage, pageSize) => {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},

	follow(id) {
		return instance.post(`follow/${id}`).then((response) => response.data)
	},

	unfollow(id) {
		return instance.delete(`follow/${id}`).then((response) => response.data)
	},
	getProfile(id) {
		console.warn('Obsolete method, use profileAPI.getProfile()')
		return profileAPI.getProfile(id)
	},
}

export const profileAPI = {
	getProfile(id) {
		return instance.get(`profile/${id}`).then((response) => response.data)
	},
	getStatus(id) {
		return instance
			.get(`profile/status/${id}`)
			.then((response) => response.data)
	},
	updateStatus(status) {
		return instance
			.put(`profile/status`, { status })
			.then((response) => response.data)
	},
}

export const authAPI = {
	authMe() {
		return instance.get('/auth/me').then((response) => response.data)
	},
}
