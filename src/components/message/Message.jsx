import React from 'react'
import style from './Message.module.scss'

export const Message = (props) => {
	return <div key={props.id} className={style.message}>{props.message}</div>
}
