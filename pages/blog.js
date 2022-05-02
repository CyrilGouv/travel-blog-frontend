import Title from '../components/Title'
import Card from '../components/Card'
import { API_URL } from '../config/constants'

import styles from '../styles/Blog.module.css'


const blog = ({ articles }) => {

    const posts = articles.data

    return (
        <div className={ styles.blog }>
            <div className="container">
                <div className={ styles.blog__wrapper }>
                    <div className={ styles.blog__header }>
                        <Title subtext="My blog" text="Discover all my adventures<br /> <span>around the world</span>" />
                    </div>
                </div>

                <div className={ styles.blog__posts }>
                    {
                        posts?.map(post => <Card key={ post.id } post={ post } />)
                    }
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/blogs?populate=*&sort=publishedAt:DESC`)
  const articles = await res.json()

  return {
    props: {
      articles,
      revalidate: 1,
    }
  }
}


export default blog