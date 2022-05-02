import Head from 'next/head'
import { API_URL } from '../config/constants'
import Card from '../components/Card'
import Showcase from '../components/Showcase'
import Title from '../components/Title'

import styles from '../styles/Home.module.css'


const Home = ({ articles }) => {

  const posts = articles.data

  return (
    <div className={ styles.home }>
      <Head>
        <title>Nomad Travel Blog</title>
      </Head>

      <Showcase />

      <section className={ styles.blog }>
        <div className="container">
          <div className={ styles.blog__wrapper }>
            <Title subtext="Lorem ipsum dolor" text="Discover my <span>adventures<span>" />
          
            <div className={ styles.blog__posts }>
              {
                posts?.map(post => <Card key={ post.id } post={ post } />)
              }
            </div>
          </div>
        </div>
      </section>
      
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
