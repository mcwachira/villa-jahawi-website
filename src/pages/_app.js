import Footer from '@/components/Footer'
import NavbarTwo from '@/components/Header/NavbarTwo'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return( 

    <>
        <ThemeProvider attribute="class">
        <NavbarTwo/>
        <Component {...pageProps} />
    <Footer/>
    </ThemeProvider>

</>
    )
   
}
