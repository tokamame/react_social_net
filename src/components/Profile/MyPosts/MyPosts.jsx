import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} lcounter={p.lcounter}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(`You typed ${text}`);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add new post</button>
                </div>


            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
