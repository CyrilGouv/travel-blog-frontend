import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { API_URL } from "../../config/constants"
import Tag from "../../components/Tag"
import Title from "../../components/Title"
import Map from "../../components/Map"
import { BiPencil } from 'react-icons/bi'

import styles from '../../styles/Post.module.css'


const post= ({ post }) => {
    const article = post.attributes
    const { latitude, longitude } = article.localisation

    let image

    if (article.image.data.attributes.formats) {
        article.image.data.attributes.formats.large ? 
            image = article.image.data.attributes.formats.large.url :
            image = article.image.data.attributes.formats.medium.url
    } else {
        image = article.image.data.attributes.url
    }
    

    return (
        <>
            { article && 
                <article className={ styles.post }>

                    <div className="container">
                        <div className={ styles.post__header }>
                            <Title sutext="Article" text={ article.titre } />
                            
                            <div className={ styles.post__tag }>
                                { article.categories.data?.map(cat => (
                                    <Tag key={ cat.id } id={ cat.id } title={ cat.attributes.titre } />
                                )) }
                            </div>

                            <div className={ styles.post__img }>
                                <Image src={ image } alt={ article.titre } layout='fill' />
                            </div>
                        </div>

                        <div className={ styles.post__content }>
                            <ReactMarkdown>{ article.contenu }</ReactMarkdown>
                        </div>

                        <div className={ styles.post__map }>
                            <Map longitude={ longitude } latitude={ latitude } />
                        </div>

                        <div className={ styles.post__info }>
                            <p className={ styles.post__info__posted }><BiPencil className={ styles.post__info__posted__icon } /><span>Posted by: { article.auteur.data.attributes.pseudo }</span></p>
                            <Image src={ article.auteur.data.attributes.avatar.data.attributes.formats.thumbnail.url } width={ 50 } height={ 50 } className={ styles.post__avatar } layout='fixed' />
                        </div>
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