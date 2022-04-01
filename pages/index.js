import Head from 'next/head'
import Image from 'next/image'
import List from '../components/List'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className='title'>Welcome to Next</h1>
        <List list={posts} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}