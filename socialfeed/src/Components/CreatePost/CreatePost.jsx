import React, { useState } from 'react';

function CreatePost({onCreate}){
    
    const [name, setName] = useState("");
    const [post, setPost] = useState("");

    const handlChahge = (event) => {
        setName(event.target.value);
    };

    const handleTextChange = (event) => {
        setPost(event.target.value);      
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(name,post);
        setName("");
        setPost("");
    };

    return <div>
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={handlChahge}/><br/>
        <label>Post</label>
        <textarea value={post} onChange={handleTextChange} rows={5}/>
        <button>Create</button>
    </form>
    </div>
}

export default CreatePost;