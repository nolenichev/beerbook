import React from 'react'
import postFormStyle from './PostForm.module.scss'

export const PostForm = () => {
    return (
        <form className={postFormStyle.form}>
            <textarea cols="30" rows="2" placeholder="What's new?"></textarea>
            <button>Post</button>
        </form>
    )
}