/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import style from './Post.module.scss'

export const Post = (props) => {
	return (
		<div className={style.post} key={props.id}>
			<h1>{props.name}</h1>

			<img src={props.img} />

			<p>{props.text}</p>

			<h4 className="mt10">{props.likesCount} Likes</h4>
		</div>
	)
}
