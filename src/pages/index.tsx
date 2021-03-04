import { GetServerSideProps } from 'next';
import React from 'react'
import { PostList } from '../components/PostList';
interface HomeProps {
  postList: Array<{}>;
}

export default function Home(props: HomeProps) {
  const firstRender = React.useRef(true);

  return (
  <>
  <main>
      <h1>Posts mais recentes</h1>
      <section className="">
      <PostList allPosts={props.postList}/>
      </section>
    </main>
  </>  
  )
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