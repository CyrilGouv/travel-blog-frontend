import Image from 'next/image'
import { AiOutlineArrowDown } from 'react-icons/ai'
import styles from '../styles/Showcase.module.css'


const Showcase = () => {
  return (
    <section className={ styles.showcase }>
        <div className="container">
            <div className={ styles.showcase__wrapper }>
                <div className={ styles.showcase__intro }>
                    <h1 className={ styles.showcase__intro__title }>Exploring the world since 2012</h1>
                    <p className={ styles.showcase__intro__para }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perspiciatis culpa excepturi, ipsa inventore laboriosam nostrum molestiae quas at fugit iste tenetur labore, rem similique eius cupiditate natus sit a?</p>
                    <a className={ styles.showcase__intro__link } href="#"><AiOutlineArrowDown /></a>
                </div>
                <div className={ styles.showcase__img }>
                    <Image src="/home-img-01.avif" alt="me in norway" layout='fill' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase