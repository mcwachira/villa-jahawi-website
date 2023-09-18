import Footer from '@/components/Footer'
import Navbar from '@/components/Header/Navbar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return( 

    <>
        <ThemeProvider attribute="class">
        <Navbar/>
        <Component {...pageProps} />
    <Footer/>
    </ThemeProvider>

</>
    )
   
}
