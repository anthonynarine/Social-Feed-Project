import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';


function App(){
    const [post, setPost] = useState([]);


    const handleCreatePost = (name, post) => {
        console.log("add name and post", name,post);
    };


    return <div>
        <CreatePost onCreate={handleCreatePost}/>
    </div>
}

export default App;