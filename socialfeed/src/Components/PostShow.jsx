import React, { useState } from 'react';
import "../Components/"



function PostShow ({ post}) {

    const [showLiked, setLiked] = useState("inactive")

    const handleLikeClick = () => {

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