import React from 'react'
import style from './DialogsList.module.scss'
import { DialogsItem } from './../dialogsItem/DialogsItem'

export const DialogsList = (props) => {
	let dialogsElements = props.dialogs.map((dialog) => (
		<DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} />
	))

	return (
		<div className={style.dialogsList}>
			<div className={style.search}>
				<input type="text" placeholder="Search" />
			</div>
			{dialogsElements}
		</div>
	)
}
