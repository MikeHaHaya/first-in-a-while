import Post from "../Post/Post";

function PostsList() {

    return (
       <ul>
           <Post author="Igor" body="Long live the Russian king."/>
           <Post author="Freddy" body="1, 2, Freddy's coming for you..."/>
           <Post author="Darth Vader" body="I banged your mom Luke"/>
           <Post author="Luke" body="Noooooooo"/>
       </ul>
    );
}

export default PostsList;