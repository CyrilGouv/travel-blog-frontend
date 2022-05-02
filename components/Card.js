import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'
import { MdOutlineDateRange } from 'react-icons/md'
import { BiPencil } from 'react-icons/bi'

import styles from '../styles/Card.module.css'

const Card = ( { post } ) => {

  const article = post.attributes
  
  
  return (


    <div className={ styles.card }>
      <h3 className={ styles.card__title }>{ article.titre }</h3>
      <p className={ styles.card__date }><MdOutlineDateRange  className={ styles.card__date__icon } /><span>Published on: { new Date(article.publishedAt).toLocaleDateString() }</span></p>
     
        <Link href={`/posts/${article.slug}`} className={ styles.card__link }>
          <div className={ styles.card__img }>
            <Image alt={ article.titre } src={ article.image.data.attributes.formats.small.url } layout='fill' />
          </div>
        </Link>
      
    
      <div className={ styles.info }>
        <p className={ styles.info__posted }><BiPencil className={ styles.info__posted__icon } /><span>Posted by: { article.auteur.data.attributes.pseudo }</span></p>
        <Image src={ article.auteur.data.attributes.avatar.data.attributes.formats.thumbnail.url } width={ 50 } height={ 50 } className={ styles.avatar } layout='fixed' />
      </div>

      <div className={ styles.tag }>
        { article.categories.data.map(cat => <Tag key={ cat.id } id={ cat.id } title={ cat.attributes.titre } />) }
      </div>
    </div>
  )
}

export default Card