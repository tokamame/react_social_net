import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="http://sun9-25.userapi.com/s/v1/if2/tmMB0RA0clp6jtxedDiKY0XYf7g_lL0GQIJPfjELJB7rygcvaWymvqaIcGif2y-z4-oxJaJoK6pkQ0pJDK-eZORR.jpg?size=200x0&quality=96&crop=0,20,200,237&ava=1"
        alt=""
      />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
