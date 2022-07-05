import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={p.content}>
            <div>
                <img src={'https://quidtree.com/wp-content/uploads/2018/03/Full-Width-Background.png'}/>
            </div>
            <div>
                {/* Avatar + Description*/}
                <img
                    src={"https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="}/>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;