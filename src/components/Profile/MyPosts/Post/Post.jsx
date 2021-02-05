import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.item_img}
        src="http://sun9-25.userapi.com/s/v1/if2/tmMB0RA0clp6jtxedDiKY0XYf7g_lL0GQIJPfjELJB7rygcvaWymvqaIcGif2y-z4-oxJaJoK6pkQ0pJDK-eZORR.jpg?size=200x0&quality=96&crop=0,20,200,237&ava=1"
        alt=""
      />
      {props.message}
      <div>
        <span>
           <img className={s.lcounter_img} src="https://freeiconshop.com/wp-content/uploads/edd/like-outline.png" alt=""/>{props.lcounter}</span>
        <span> like</span>
      </div>
    </div>
  );
};

export default Post;
