function PostShow ({ post}) {

    return (
        <table className="table">
            <tbody>
                <tr>
                    <td scope="row">{post.name}</td>
                </tr>
                <tr>
                    <td scope="row">{post.post}</td>
                </tr>

            </tbody>
        </table>

    )
};

export default PostShow;