import { GetServerSideProps } from 'next';
import React from 'react'
import { PostList } from '../components/PostList';
import styles from '../../styles/pages/Home.module.css';
import Head from 'next/head';
import { Header } from '../components/Header';
interface HomeProps {
  postList: Array<{}>;
}

export default function Home(props: HomeProps) {

  return (
  <>
  <div className={styles.container}>
  <Head>
        <title> Inicio | BlogX </title>
  </Head>
      <Header />
      <PostList allPosts={props.postList}/>
  </div> 
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