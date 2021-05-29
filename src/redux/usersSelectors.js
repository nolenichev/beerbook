import { createSelector } from 'reselect'

const getUsers = (state) => state.usersPage.users

export const getUsersSelector = createSelector(getUsers, (users) => {
	return users.filter((user) => true)
})
export const getPageSize = (state) => state.usersPage.pageSize

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount

export const getCurrentPage = (state) => state.usersPage.currentPage

export const getIsFetching = (state) => state.usersPage.isFetching

export const getFollowingInProgress = (state) =>
	state.usersPage.followingInProgress
