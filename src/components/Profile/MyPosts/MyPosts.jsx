import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message="Hi, how are you?" lcounter="15"/>
                <Post message="It's my very first post" lcounter="20"/>
            </div>
        </div>
    );
};

export default MyPosts;
