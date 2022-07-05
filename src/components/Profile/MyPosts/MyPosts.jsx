import p from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={p}>
                <Post message ='Hey, sup ma G?' />
                <Post message = "I'm aight fool" />
            </div>
        </div>
    );
};

export default MyPosts;