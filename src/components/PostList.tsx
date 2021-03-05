import React from 'react';
import styles from '../../styles/components/PostList.module.css';
import Image from 'next/image';

export function PostList({allPosts}) {
    const [posts, setPosts] = React.useState([]);
    const [endListPost, setEndListPost] = React.useState(10);

    React.useEffect(() => {
        const paginatePosts = allPosts.slice(0, endListPost);
        setPosts(paginatePosts);
    }, [endListPost]);


    return (
        <main className={styles.postListContainer}>
            <h1>Posts mais recentes</h1>
            
            <section className={styles.focusPostContainer}>
            {posts.length > 0 && ( 
                <div>
                    <Image src={'/placeholder.png'} width={1024} height={500}/>
                    <h2>{posts[0].title}</h2>
                    <span>{posts[0].user.name}</span>
                </div>
                ) }
            </section>

            <section className={styles.morePostsContainer}>
            {posts.map(post => (
                <div key={post.id} className={styles.post}>
                    <Image src={'/placeholder.png'} width={400} height={200} />
                    <h3>{post.title}</h3>
                    <span>{post.user.name}</span>
                </div>
            ))}
            </section>

            <button onClick={() => setEndListPost(endListPost + 10)}>Mais posts</button>
        </main>
    )
}
