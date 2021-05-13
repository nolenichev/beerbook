import React from 'react'
import style from './UserItem.module.scss'
import noAvatar from '../../images/noavatar.png'

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

				return (
					<div key={user.id} className={style.userItem}>
						<div className={style.leftSide}>
							<img
								src={avatar(user.photos.small)}
								alt="User avatar"
							/>
							<div>
								<h2>{user.name}</h2>
								<p>{user.status}</p>
							</div>
						</div>
						<div className={style.rightSide}>
							{user.isFollowed ? (
								<button
									className={style.unfollowBtn}
									onClick={() => {
										props.unfollow(user.id)
									}}
								>
									Unfollow
								</button>
							) : (
								<button
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
		</div>
	)
}

export default UserItem
