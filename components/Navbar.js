import Link from 'next/link'

import styles from '../styles/Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={ styles.navbar }>
        <div className={ styles.navbar__item }>
            <Link href='/'>
                {/* <Image 
                    src={ logo }
                    alt="Travel Blog Logo"
                    width={ 140 }
                    height={ 140 }
                /> */}
                LOGO
            </Link>
        </div>
        <div className={ styles.navbar__item }>
            <p>XXX</p>
        </div>
    </nav>
  )
}

export default Navbar