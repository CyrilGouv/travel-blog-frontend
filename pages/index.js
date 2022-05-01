import Head from 'next/head'
import { API_URL } from '../config/constants'
import Card from '../components/Card'

import styles from '../styles/Home.module.css'


const Home = ({ articles }) => {

  const posts = articles.data

  return (
    <div className={ styles.home }>
      <Head>
        <title>Nomad Travel Blog</title>
      </Head>

      <div className={ styles.posts }>
        {
          posts?.map(post => <Card key={ post.id } post={ post } />)
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/blogs?populate=*`)
  const articles = await res.json()

  return {
    props: {
      articles,
      revalidate: 1,
    }
  }
}

export default Home
