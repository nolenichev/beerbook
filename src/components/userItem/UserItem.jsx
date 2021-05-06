import React from 'react'
import style from './UserItem.module.scss'

export default function UserItem(props) {
	return props.users.map((user) => {
		return (
			<div key={user.id} className={style.userItem}>
				<div className={style.leftSide}>
					<img src={user.avatar} alt="User avatar" />
					<div>
						<h2>{user.fullName}</h2>
						<p>{user.jobTitle}</p>
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
	})
}
