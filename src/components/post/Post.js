import React from 'react'
import style from './Post.module.scss'

export const Post = (props) => {

	let isPhotoInPost = () => {
		if(props.img) {
			return <img src={props.img} alt="Post content" />
		}
	}

	return (
		<div className={style.post} key={props.id}>
			<h2>{props.name}</h2>

			{isPhotoInPost()}

			<p>{props.text}</p>

			<h4 className="mt10">{props.likesCount} Likes</h4>
		</div>
	)
}
