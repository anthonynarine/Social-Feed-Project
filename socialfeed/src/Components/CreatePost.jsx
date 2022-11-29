import React, { useState } from "react";
import "../"

function CreatePost({ onCreate }) {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit (event) {
    event.preventDefault();
    let newPost = { 
        name: name,
        post: post 
    };
    console.log(newPost)
    onCreate(newPost);
    setName("");
    setPost("");
  };

  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={(event)=>setName(event.target.value)}/><br></br>
        <label>Post</label>
        <textarea value={post} onChange={(event)=>setPost(event.target.value)}/>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
