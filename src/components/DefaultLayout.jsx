import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Open_Sans } from 'next/font/google';

const OpenSans = Open_Sans({ subsets: ['latin'] });

const DefaultLayout = ({ children }) => {
  return (
    <main className={OpenSans.className}>
        <Header />
            {children}
        <Footer />
    </main>
  )
}

export default DefaultLayout