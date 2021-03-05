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
    focusPost: PostType
}

export const PostsContext = React.createContext({} as PostContextData);

export function PostsProvider({children, ...rest}: PostsProviderProps) {
    const [posts, setPosts] = React.useState([]);
    const [endListPost, setEndListPost] = React.useState(10);
    const [focusPost, setFocusPost] = React.useState([]);

    function setPostList(postList: Array<PostType>) {
        setPosts(postList)
    }

    function getMorePosts() {
        setEndListPost(endListPost + 10);
    }
    React.useEffect(() => {
        setFocusPost(rest.posts[0]);
    }, [])

    React.useEffect(() => {
        const paginatePosts = rest.posts.slice(1, endListPost);
        setPosts(paginatePosts);
    }, [endListPost]);

    return (
        <PostsContext.Provider 
        value={{
            posts,
            setPostList,
            getMorePosts,
            focusPost
        }}>
            {children}
        </PostsContext.Provider>
    )
}