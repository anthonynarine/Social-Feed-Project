import React, { useState } from 'react';
import CreatePost from './Components/CreatePost';
import PostList from "./Components/PostList";
import "./App.css";


function App(){
    const [posts, setPosts] = useState([{name:"Anthony", post:"this is a hard coded post entry"}]);

    const handleCreatePost = ({name,post}) => {
        const updatedPosts = [...posts, {name,post} ];
        setPosts(updatedPosts);
    };


    return (    
    <div className='container-fluid'>
        <div><h2>Social Feed</h2></div>
        <div className='row'>
            <div className='col-md'>
                <div className='border-box'><CreatePost onCreate={handleCreatePost}/></div>
                <div className='border-box'><PostList posts={posts}/></div>              
            </div>
        </div>
    </div>)
}

export default App;