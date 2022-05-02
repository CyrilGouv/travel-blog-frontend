import styles from '../styles/Title.module.css'


const Title = ({ subtext, text }) => {
  return (
    <div className={ styles.title }>
        <span className={ styles.title__subtext }>{ subtext }</span>
        <h2 className={ styles.title__text } dangerouslySetInnerHTML={{ __html: text }}></h2>
    </div>
  )
}

export default Title