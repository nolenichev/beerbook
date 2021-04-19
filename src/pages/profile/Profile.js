import React from 'react'
import bg from './../../images/bg.jpg'
import { PostForm } from '../../components/postForm/PostForm'
import { Post } from '../../components/post/Post'

export const Profile = () => {
    return (
        <div className="profile-page">
            <img src={bg} alt="background" />
            <header>
                <h1>Nikita Olenichev</h1>
                <PostForm />
            </header>
            <Post name="Random post" img={false} />
            <Post name="Title" />
        </div>
    )
}
