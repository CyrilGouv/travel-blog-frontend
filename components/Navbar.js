import Link from 'next/link'
import { useRouter } from 'next/router'
import { SiYourtraveldottv } from 'react-icons/si'

import styles from '../styles/Navbar.module.css'


const Navbar = () => {

    const router = useRouter()

    return (
        <nav className={ styles.navbar }>
            <div className={ styles.navbar__item }>
                <Link href='/'>
                    <a className={ styles.navbar__item__logo }>
                        <SiYourtraveldottv className={ styles.navbar__item__logo__img } />
                        <span>Travel Blog</span> 
                    </a>
                </Link>
            </div>
            <ul className={ styles.navbar__menu}>
                <li className={ router.pathname == '/' ? `${styles.navbar__menu__active}` : '' }><Link href='/'>Home</Link></li>
                <li><Link href='#'>About</Link></li>
                <li className={ router.pathname == '/blog' ? `${styles.navbar__menu__active}` : '' }><Link href='/'>Blog</Link></li>
                <li><Link href='#'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar