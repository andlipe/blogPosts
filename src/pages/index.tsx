import { GetServerSideProps } from 'next';
import React from 'react'
import { PostList } from '../components/PostList';
import styles from '../../styles/pages/Home.module.css';
import Head from 'next/head';
import { Header } from '../components/Header';

type PostType = {
  body: string;
  id: number;
  title: string;
  user: {
      id: number;
      name: string;
  };
  userId: number;
}
interface HomeProps {
  fetchPostList: Array<PostType>;
}

export default function Home(props: HomeProps) {
  return (
  <>
    <div className={styles.container}>
    <Head>
          <title> Inicio | BlogX </title>
    </Head>
        <Header />
        <PostList allPosts={props.fetchPostList}/>
    </div> 
  </>  
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fetchPostList = await fetch('http://localhost:3000/api/posts')
    .then(response => response.json());
    return {
      props: {
        fetchPostList,
      }
    }
}