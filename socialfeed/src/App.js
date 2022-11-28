import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import PostList from "./Components/CreatePost/CreatePost"


function App(){
    const [posts, setPosts] = useState([]);

    const handleCreatePost = (name, post) => {
        const updatedPosts = [...post, {name, post} ];
        setPosts(updatedPosts);
    };


    return <div>
        <PostList posts={posts}/>
        <CreatePost onCreate={handleCreatePost}/>
    </div>
}

export default App;