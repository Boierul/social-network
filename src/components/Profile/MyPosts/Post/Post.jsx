import s from './Post.module.css';

const Post = (post) => {

    console.log(post.message);

    return (
        <div className={s.item}>
            <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F182%2F182133.jpg&f=1&nofb=1'/>
            {post.message}
            <div>
                {post.likesCount}
                <span> like </span>
            </div>
        </div>
    )
}

export default Post;