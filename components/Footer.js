import styles from '../styles/Footer.module.css'


const Footer = () => {
  return (
    <footer className={ styles.footer }>
        <div className="container">
            <div className={ styles.footer__wrapper }>
                <ul className={ styles.footer__socials }>
                    <li>Follow me:</li>
                    <li>
                        <a href="https://www.malt.fr/profile/cyrilgouv" target='_blank' rel='noopener noreferrer'>Malt</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/cyril-g-030690167/" target='_blank' rel='noopener noreferrer'>Linkedin</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/CyrilGouv" target='_blank' rel='noopener noreferrer'>Twitter</a>
                    </li>
                </ul>
                <div className={ styles.footer__copyright }>
                    <span>&copy; 2022 Created by <a href="https://cyrilgouv.com" target='_blank' rel='noopener noreferrer'>Cyril Gouv</a></span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer