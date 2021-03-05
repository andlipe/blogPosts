import React from 'react';
import { PostType } from '../types/PostType';

interface PostsProviderProps {
    children: React.ReactNode;
    posts: Array<PostType>;
}

interface PostContextData {
    posts: Array<PostType>;
    setPostList: ([]) => void;
    getMorePosts: () => void;
}

export const PostsContext = React.createContext({} as PostContextData);

export function PostsProvider({children, ...rest}: PostsProviderProps) {
    const [posts, setPosts] = React.useState([]);
    const [endListPost, setEndListPost] = React.useState(10);

    function setPostList(postList: Array<PostType>) {
        setPosts(postList)
    }

    function getMorePosts() {
        setEndListPost(endListPost + 10);
    }

    React.useEffect(() => {
        const paginatePosts = rest.posts.slice(0, endListPost);
        setPosts(paginatePosts);
    }, [endListPost]);

    return (
        <PostsContext.Provider 
        value={{
            posts,
            setPostList,
            getMorePosts
        }}>
            {children}
        </PostsContext.Provider>
    )
}