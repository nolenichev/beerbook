import React from 'react'
import style from './DialogsList.module.scss'
import { DialogsItem } from './../dialogsItem/DialogsItem'

export const DialogsList = (props) => {
	let dialogsElements = props.store.getState().dialogsPage.dialogs.map((dialog) => (
		<DialogsItem
			name={dialog.name}
			key={dialog.id}
			id={dialog.id}
			userId={dialog.userId}
			avatar={dialog.avatar}
		/>
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
