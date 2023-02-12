import Post from "../Post/Post";
import classes from "./PostsList.module.css";
import NewPost from "../NewPost/NewPost";
import {useState} from "react";
import Modal from "../Modal/Modal";

function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    let modelContent;
    if (modalIsVisible) {
        modelContent = (
            <Modal onClose={hideModalHandler}>
                <NewPost
                    onBodyChange={bodyChangeHandler}
                    onAuthorChange={authorChangeHandler}
                />
            </Modal>
        );
    }

    return (
        <>
            {modelContent}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Freddy" body="1, 2, Freddy's coming for you..."/>
                <Post author="Darth Vader" body="I banged your mom Luke"/>
                <Post author="Luke" body="Noooooooo"/>
            </ul>
        </>
    );
}

export default PostsList;