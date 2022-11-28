import React, { useState } from 'react';


function CreatePost({onCreate}){
    
    const [name, setName] = useState("");
    const [post, setPost] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTextChange = (event) => {
        setPost(event.target.value);      
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(name, post);
        setName("");
        setPost("");
    };

    return <div>
    <form onSubmit={handleSubmit}>
        <div><h1>Social Feed</h1></div>
        <label>Name</label>
        <input value={name} onChange={handleNameChange}/><br/>
        <label>Post</label>
        <textarea value={post} onChange={handleTextChange}/>
        <button>Create</button>
    </form>
    </div>
}

export default CreatePost;