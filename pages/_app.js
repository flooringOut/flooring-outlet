import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import '@/styles/globals.css';
import Head from 'next/head';
import PageTransition from '@/src/components/Transition';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title}</title>
      </Head>
      <PageTransition>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PageTransition>
    </>
  );
}
