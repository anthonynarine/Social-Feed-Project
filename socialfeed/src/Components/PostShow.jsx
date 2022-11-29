import React, { useState } from 'react';

// Add like button functionality below
function PostShow ({ post}) {

    const [showLiked, setLiked] = useState("inactive")

    const handleLikeClick = () => {
        if(showLiked ==="inactive"){
            setLiked("active")
        }
        else {
            setLiked("inactive")
        }
    }

    return (
    <div className='show-post'>
        <div className='user-name'>
        {post.name}       
        </div>
        <div className='user-post'>
        {post.post}
        </div>
        <div><button className='like-button' value={showLiked} onClick={handleLikeClick}>Like</button></div>
    </div>

    )
    
};

export default PostShow;