import React from 'react'

export function PostList({allPosts}) {
    const [posts, setPosts] = React.useState([])
    const [endListPost, setEndListPost] = React.useState(10);

    React.useEffect(() => {
        const paginatePosts = allPosts.slice(0, endListPost);
        setPosts(paginatePosts);
    }, [endListPost]);


    return (
        <article className="postListContainer">
            {posts.map(post => (
                <section key={post.id}>
                    <h3>{post.title}</h3>
                    <span>{post.user.name}</span>
                </section>
            ))}
            <button onClick={() => setEndListPost(endListPost + 10)}>Mais posts</button>
        </article>
    )
}
