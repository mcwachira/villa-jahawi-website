import Footer from '@/components/Footer/Footer'
import NavbarTwo from '@/components/Header/NavbarTwo'
import Layout from '@/components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return( 

    <>
        <NavbarTwo/>
        <Component {...pageProps} />
    <Footer/>
    

</>
    )
   
}
