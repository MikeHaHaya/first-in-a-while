import Post from "../Post/Post";
import classes from "./PostsList.module.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";
import {useState, useEffect} from "react";

function PostsList({isPosting, onStopPosting}) {

    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("http://localhost:8080/posts")
            const resData = await response.json();
            setPosts(resData.posts);
        }

        fetchPosts();
    }, [])


    function addPostHandler(postData) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        setPosts(existingPosts => [postData, ...existingPosts]);
    }

    // TODO -- Learn how to pass an ID properly
    function setIdHandler() {
        setId(id + 1);
        console.log(id);
        return id;
    }

    let modelContent;
    if (isPosting) {
        modelContent = (
            <Modal onClose={onStopPosting}>
                <NewPost
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
                />
            </Modal>
        );
    }

    return (
        <>
            {modelContent}
            <ul className={classes.posts}>
                {posts.map(post => <Post key={setIdHandler} author={post.author} body={post.body}/>)}
            </ul>

            {posts.length === 0 &&
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            }
        </>
    );
}

export default PostsList;