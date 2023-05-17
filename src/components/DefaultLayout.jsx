import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Open_Sans } from 'next/font/google';
import Head from 'next/head';

const OpenSans = Open_Sans({ subsets: ['latin'] });

const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <main className={OpenSans.className}>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Header />
            {children}
        <Footer />
    </main>
  )
}

export default DefaultLayout