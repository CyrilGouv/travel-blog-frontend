import Head from "next/head"
import Card from "../../components/Card"
import { API_URL } from "../../config/constants"

import styles from '../../styles/Category.module.css'


const Category = ({ category }) => {
    const cat = category.attributes

    return (
        <div className={ styles.category }>
            <Head>
                <title>Category: { cat.titre } - Nomad Travel Blog</title>
            </Head>

            <div className={ styles.category__posts }>
                {
                    cat.blogs.data?.map(post => <Card key={ post.id } author={ post.attributes.auteur } post={ post } />)
                }
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/categories?populate=*`)
    const categories = await res.json()

    const paths = categories.data.map(cat => (
        {
            params: { id: cat.id.toString() }
        }
    ))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params: { id } }) {
    const res = await fetch(`${API_URL}/categories/${id}`)
    const categories = await res.json()

    return {
        props: {
            category: categories.data,
            revalidate: 1
        }
    }
}

export default Category