import Paginator from './../paginator/Paginator'
import style from './UserItem.module.scss'
import noAvatar from '../../images/noavatar.png'
import { NavLink } from 'react-router-dom'

const UserItem = (props) => {
	return (
		<>
			{props.users.map((user) => {
				const avatar = (photo) => {
					return photo ? photo : noAvatar
				}
				const userId = `/id${user.id}`

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

			<Paginator
				totalItemsCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
				portionSize={10}
			/>
		</>
	)
}

export default UserItem
