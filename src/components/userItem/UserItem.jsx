import React from 'react'
import style from './UserItem.module.scss'
import noAvatar from '../../images/noavatar.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const UserItem = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []

	for (let index = 1; index <= pagesCount; index++) {
		pages.push(index)
	}

	return (
		<div>
			{props.users.map((user) => {
				const avatar = (photo) => {
					return photo ? photo : noAvatar
				}
				const userId = `/profile/${user.id}`

				return (
					<div key={user.id} className={style.userItem}>
						<div className={style.leftSide}>
							<NavLink to={userId}>
								<img
									src={avatar(user.photos.small)}
									alt="User avatar"
								/>
							</NavLink>
							<div>
								<NavLink to={userId}>
									<h2>{user.name}</h2>
								</NavLink>
								<p>{user.status}</p>
							</div>
						</div>
						<div className={style.rightSide}>
							{user.followed ? (
								<button
									className={style.unfollowBtn}
									onClick={() => {
										axios
											.delete(
												`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
												{
													withCredentials: true,
													headers: {
														'API-KEY':
															'78e344c0-c560-4361-b743-db91f3b192fd',
													},
												}
											)
											.then((response) => {
												if (
													response.data.resultCode ===
													0
												) {
													props.unfollow(user.id)
												}
											})
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										axios
											.post(
												`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
												null,
												{
													withCredentials: true,
													headers: {
														'API-KEY':
															'78e344c0-c560-4361-b743-db91f3b192fd',
													},
												}
											)
											.then((response) => {
												if (
													response.data.resultCode ===
													0
												) {
													props.follow(user.id)
												}
											})
									}}
								>
									Follow
								</button>
							)}
						</div>
					</div>
				)
			})}

			<div className={style.pagePagination}>
				{pages.map((page) => (
					<button
						key={page}
						className={
							props.currentPage === page ? style.selectedPage : ''
						}
						onClick={() => {
							props.onPageChanged(page)
						}}
					>
						{page}
					</button>
				))}
			</div>
		</div>
	)
}

export default UserItem
