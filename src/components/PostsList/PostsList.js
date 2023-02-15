import Post from "../Post/Post";
import classes from "./PostsList.module.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";
import {useState, useEffect} from "react";

function PostsList({isPosting, onStopPosting}) {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [id, setId] = useState(0);

    /** How to go get data without React being overloaded.
     * this will make React load it just one time when the Component is launched. */
    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch("http://localhost:8080/posts");
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
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
        setId(prevId => prevId + 1);
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

    if (!isFetching) {
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
    } else {
        return (
            <div style={{textAlign: 'center', color: 'white'}}>
            <p>Loading posts...</p>
            </div>
        )
    }
}

export default PostsList;