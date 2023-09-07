"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Header/Navbar'
import Footer from '@/components/Footer/Footer'
import NavbarTwo from '@/components/Header/NavbarTwo'


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <NavbarTwo/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
