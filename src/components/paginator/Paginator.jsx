import React from 'react'
import style from './Paginator.module.scss'

export function Paginator(props) {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []

	for (let index = 1; index <= pagesCount; index++) {
		pages.push(index)
	}

	return (
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
	)
}
