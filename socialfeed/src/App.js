import React, { useState } from 'react';
import CreatePost from './Components/CreatePost';
import PostList from "./Components/PostList";


function App(){
    const [posts, setPosts] = useState([{name:"Anthony", post:"this is a hard coded post entry"}]);

    const handleCreatePost = ({name,post}) => {
        const updatedPosts = [...posts, {name,post} ];
        setPosts(updatedPosts);
    };


    return <div>
        <CreatePost onCreate={handleCreatePost}/>
        <PostList posts={posts}/>
    </div>
}

export default App;