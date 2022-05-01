import Link from 'next/link'

import styles from '../styles/Tag.module.css'


const Tag = ({ title, id }) => {

  const getColor = () => {
    let color

    switch (title.toLowerCase()) {
      case 'travel':
        color = 'rgb(210,138,138)'
        break;

      case 'family':
        color = 'rgb(138,173,138)'
        break;
    
      default:
        color = 'rgb(169,210,138)'
        break;
    }

    return color
  }

  return (
    <div className={ styles.tag } style={{ backgroundColor: getColor() }}>
      <Link href={`/category/${id}`}>
        { title }
      </Link>
    </div>
  )
}

export default Tag