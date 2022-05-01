import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

import styles from '../styles/Card.module.css'

const Card = ( { post } ) => {

  const article = post.attributes
  
  
  return (


    <div className={ styles.card }>
      <h2>{ article.titre }</h2>
      <p>Published on: { new Date(article.publishedAt).toLocaleDateString() }</p>
     
        <Link href={`/posts/${article.slug}`} className={ styles.card__link }>
          <div className={ styles.card__img }>
            <Image alt={ article.titre } src={ article.image.data.attributes.formats.small.url } layout='fill' />
          </div>
        </Link>
      
    
      <div className={ styles.info }>
        <p>Posted by: { article.auteur.data.attributes.pseudo }</p>
        <Image src={ article.auteur.data.attributes.avatar.data.attributes.formats.thumbnail.url } width={ 50 } height={ 50 } className={ styles.avatar } layout='fixed' />
      </div>

      <div className={ styles.tag }>
        { article.categories.data.map(cat => <Tag key={ cat.id } id={ cat.id } title={ cat.attributes.titre } />) }
      </div>
    </div>
  )
}

export default Card