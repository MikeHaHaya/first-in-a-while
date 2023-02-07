import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost() {
    const [enteredBody, setEnteredBody] = useState("");
    /** const stateData = useState("");
     What stateData stores
     stateData[0] -- current value
     stateData[1] -- state updating function */

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>{enteredBody}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required/>
            </p>
        </form>
    );
}

export default NewPost;