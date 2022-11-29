import PostShow from "./PostShow";

function PostList({posts}) {

    const renderPosts = posts.map((post, index) =>{
        return <PostShow key={index} post={post}/>;
    })


    return (
    <div>{renderPosts}</div>
    )

};

export default PostList;