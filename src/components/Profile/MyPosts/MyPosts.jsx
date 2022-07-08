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
                <Post message ='Hey, sup ma G?' likesCount = '14' />
                <Post message = "I'm aight fool" likesCount = '22' />
            </div>
        </div>
    );
};

export default MyPosts;