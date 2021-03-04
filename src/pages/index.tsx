import { GetServerSideProps } from 'next';
import React from 'react'

interface HomeProps {
  postList: Array<{}>;

}

export default function Home(props: HomeProps) {
  const [posts, setPosts] = React.useState([])
  const firstRender = React.useRef(true);
  const [startListPost, setStartListPost] = React.useState(props.postList.length - 10);
  
  React.useEffect(() => {
    const paginatePosts = props.postList.slice(startListPost, props.postList.length);
    setPosts(paginatePosts);
    firstRender.current = false;
  }, [startListPost]);
  
  

  if(!firstRender.current) {
  return (
    <main>
      <h1>Posts mais recentes</h1>
      <div>
      {posts.map(post => (
        <div className={post.id} key={post.id}>
          <h3>{post.title}</h3>
          <span>{post.body}</span>
        </div>
      )
      )
      }
      </div>
      <button onClick={() => setStartListPost(startListPost - 10)}>Mais posts</button>
    </main>
  )
  }
  return(
    <div>teste</div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  

  const postList = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())

  return {
    props: {
      postList: postList
    }
  }
}