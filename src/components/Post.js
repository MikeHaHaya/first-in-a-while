const names = ["Swarley", "Torig"];

function Post() {

    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return (
        <div>
            <p>{chosenName}</p>
            <h1></h1>
            <p>React is ok so far I guess.</p>
        </div>
    );
}

export default Post;