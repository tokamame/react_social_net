import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add new post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" lcounter="15" />
        <Post message="It's my very first post" lcounter="20" />
      </div>
    </div>
  );
};

export default MyPosts;
