import React from 'react'
import style from './UserItem.module.scss'
import noAvatar from '../../images/noavatar.png'
import { NavLink } from 'react-router-dom'

const UserItem = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []

	for (let index = 1; index <= pagesCount; index++) {
		pages.push(index)
	}

	return (
		<>
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
									disabled={props.followingInProgress.some(
										(id) => id === user.id
									)}
									onClick={() => {
										props.unfollow(user.id)
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									disabled={props.followingInProgress.some(
										(id) => id === user.id
									)}
									onClick={() => {
										props.follow(user.id)
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
		</>
	)
}

export default UserItem
