import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: '1', message: 'Hi, how are you?', lcounter: 15},
        {id: '2', message: 'It\'s my very first post', lcounter: 20},
        {id: '3', message: 'Pretty day', lcounter: 50},
    ]

    let postsElements = posts.map(p => <Post message={p.message} lcounter={p.lcounter}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="messageText" id=""/>
                </div>
                <div>
                    <button>Add new post</button>
                </div>


            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
