import React from 'react'
import style from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={style.rollerContainer}>
			<div className={style.roller}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
export default Loader
