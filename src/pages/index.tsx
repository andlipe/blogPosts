import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { PostList } from '../components/PostList';
import styles from '../styles/pages/Home.module.css';
import { Header } from '../components/Header';
import { PostType } from '../types/PostType';
import { PostsProvider } from '../contexts/PostsContext';

interface HomeProps {
  fetchPostList: Array<PostType>;
}

export default function Home(props: HomeProps) {

  return (
    <div className={styles.container}>
    <Head>
          <title> Inicio | BlogX </title>
    </Head>
        <Header />
          <PostsProvider
          posts={props.fetchPostList}
          >
          <PostList />
        </PostsProvider>
    </div> 
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = process.env.URL;
  const fetchPostList = await fetch(`${url}/api/posts`)
    .then(response => response.json());
    return {
      props: {
        fetchPostList,
      }
    }
}