import React, { useState } from 'react'
import style from './Paginator.module.scss'

export function Paginator({
	totalItemsCount,
	pageSize,
	currentPage,
	onPageChanged,
	portionSize,
}) {
	let pagesCount = Math.ceil(totalItemsCount / pageSize)
	let pages = []

	for (let index = 1; index <= pagesCount; index++) {
		pages.push(index)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize

	return (
		<div className={style.pagePagination}>
			{portionNumber > 1 && (
				<button onClick={() => setPortionNumber(portionNumber - 1)}>
					prev
				</button>
			)}
			{pages
				.filter(
					(page) =>
						page >= leftPortionPageNumber &&
						page <= rightPortionPageNumber
				)
				.map((page) => (
					<button
						key={page}
						className={
							currentPage === page ? style.selectedPage : ''
						}
						onClick={() => {
							onPageChanged(page)
						}}
					>
						{page}
					</button>
				))}
			{portionCount > portionNumber && (
				<button onClick={() => setPortionNumber(portionNumber + 1)}>
					next
				</button>
			)}
		</div>
	)
}
