import { GetServerSideProps } from 'next';
import React from 'react'
import { Post } from '../components/Post';
interface HomeProps {
  postList: Array<{}>;
}

export default function Home(props: HomeProps) {
  const [posts, setPosts] = React.useState([])
  const firstRender = React.useRef(true);
  const [endListPost, setEndListPost] = React.useState(10);

  React.useEffect(() => {
    
    console.log(props.postList)
    const paginatePosts = props.postList.slice(0, endListPost);
    setPosts(paginatePosts);
    firstRender.current = false;
  }, [endListPost]);
  
  
  if(!firstRender.current) {
  return (
    <main>
      <h1>Posts mais recentes</h1>
      <div>
      {posts.map(post => (
        <Post 
          id={post.id}
          title={post.title} 
          autorName={post.user.name} 
          />
      ))}
      </div>
      <button onClick={() => setEndListPost(endListPost + 10)}>Mais posts</button>
    </main>
  )
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fetchPost = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
  const fetchUsers = await fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json());
  let arrayUsers = [];
  fetchUsers.map(user => (
      arrayUsers.push({
        id: user.id,
        name: user.name
      })
      ))
  
    fetchPost.forEach((post) => {
      let user = arrayUsers.find(element => element.id === post.userId);
      Object.assign(post, 
        {user}
      )
    })

    const postList = fetchPost.reverse();

  return {
    props: {
      postList: postList,
    }
  }
}