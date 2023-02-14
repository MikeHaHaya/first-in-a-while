import Post from "../Post/Post";
import classes from "./PostsList.module.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

function PostsList({isPosting, onStopPosting}) {


    let modelContent;
    if (isPosting) {
        modelContent = (
            <Modal onClose={onStopPosting}>
                <NewPost
                    onCancel={onStopPosting}
                />
            </Modal>
        );
    }

    return (
        <>
            {modelContent}
            <ul className={classes.posts}>
                <Post author="Freddy" body="1, 2, Freddy's coming for you..."/>
                <Post author="Darth Vader" body="I banged your mom Luke"/>
                <Post author="Luke" body="Noooooooo"/>
            </ul>
        </>
    );
}

export default PostsList;