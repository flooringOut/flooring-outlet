import PageTransition from '@/components/Transition'
import '../styles/globals.css'
import AppContext from '@/context/AppContext'
import contentful from '@/api/contentful'
import DefaultLayout from '@/components/DefaultLayout'

export default function App({ Component, pageProps, categoriesData }) {
  console.log({categoriesData})
  return (
    <AppContext.Provider value={{categoriesData}}>
      <PageTransition>
        <DefaultLayout pageTitle={Component.title}>
          <Component {...pageProps} />
        </DefaultLayout>
      </PageTransition>
    </AppContext.Provider>
  )
}

App.getInitialProps = async () => {
  const res = await contentful.getEntries({ content_type: 'categories'});
  const categoriesData = res.items;

  return {
    categoriesData,
  }
}