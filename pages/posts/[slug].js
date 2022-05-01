import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { API_URL } from "../../config/constants"
import Tag from "../../components/Tag"

import styles from '../../styles/Post.module.css'


const post= ({ post }) => {
    const article = post.attributes

    return (
        <>
            { article && 
                <article className={ styles.post }>
                    <h1>{ article.titre }</h1>
                    <hr />
                    <div className={ styles.tag }>
                        { article.categories.data?.map(cat => (
                            <Tag key={ cat.id } id={ cat.id } title={ cat.attributes.titre } />
                        )) }
                    </div>
                    
                    <ReactMarkdown>{ article.contenu }</ReactMarkdown>

                    <hr />

                    <div className={ styles.info }>
                        <p>Posted by: { article.auteur.data.attributes.pseudo }</p>
                        <Image src={ article.auteur.data.attributes.avatar.data.attributes.formats.thumbnail.url } width={ 50 } height={ 50 } className={ styles.avatar } layout='fixed' />
                    </div>
                </article>
            }
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/blogs?populate=*`)
    const blogs = await res.json()

    const paths = blogs.data.map(blog => (
        {
            params: { slug: blog.attributes.slug }
        }
    ))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params: { slug } }) {
    const res = await fetch(`${API_URL}/blogs?filters[slug][$eq]=${slug}&[populate]=*`)
    const blogs = await res.json()
    
    return {
        props: {
            post: blogs.data[0],
            revalidate: 1
        }
    }
}

export default post