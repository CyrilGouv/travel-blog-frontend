import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../styles/globals.css'


const MyApp = ({ Component, pageProps }) => {
  return (
    <div className='app--container'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
