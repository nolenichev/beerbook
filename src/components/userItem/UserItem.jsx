import React from 'react'
import style from './UserItem.module.scss'
import noAvatar from './../../images/noavatar.png'
import * as axios from 'axios'

class UserItem extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
			)
			.then((response) => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
			)
			.then((response) => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		let pagesCount = Math.ceil(
			this.props.totalUsersCount / this.props.pageSize
		)
		let pages = []

		for (let index = 1; index <= pagesCount; index++) {
			pages.push(index)
		}

		return (
			<div>
				<div className={style.pagePagination}>
					{pages.map((page) => (
						<button
							className={
								this.props.currentPage === page ?
								style.selectedPage : ''
							}
							onClick={() => {
								this.onPageChanged(page)
							}}
						>
							{page}
						</button>
					))}
				</div>
				{this.props.users.map((user) => {
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
											this.props.unfollow(user.id)
										}}
									>
										Unfollow
									</button>
								) : (
									<button
										onClick={() => {
											this.props.follow(user.id)
										}}
									>
										Follow
									</button>
								)}
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default UserItem
