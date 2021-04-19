/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import postStyle from './Post.module.scss'

export const Post = (props) => {


    return (
        <div className={postStyle.post}>
            <h1>{props.name}</h1>

            <img src="https://s23527.pcdn.co/wp-content/uploads/2019/12/Downside-Up-745x449.jpg.optimal.jpg" />
        
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus accusamus non excepturi qui, ducimus provident dignissimos, dolore reprehenderit itaque voluptatibus voluptates neque illum dolores nisi facilis dicta debitis quibusdam. Itaque?
            </p>
        </div>
    )
}
