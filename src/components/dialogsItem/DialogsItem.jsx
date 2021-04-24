import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './DialogsItem.module.scss'

export const DialogsItem = (props) => {
	let path = '/dialogs/id' + props.id

	return (
		<NavLink
			to={path}
			className={style.dialoge}
			activeClassName={style.active}
		>
			<h3>{props.name}</h3>
			<h4>How is it going?</h4>
		</NavLink>
	)
}