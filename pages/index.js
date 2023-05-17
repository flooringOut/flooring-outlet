import Carousel from '@/components/Carousel';
import PopularCarousel from '@/components/PopularCarousel';
import contentful from '@/api/contentful';
import Categories from '@/components/Categories';
import { Open_Sans } from 'next/font/google';
import PageTransition from '@/components/Transition';
import { useContext } from 'react';
import AppContext from '@/context/AppContext';

Home.title = 'HOME';

const OpenSans = Open_Sans({ subsets: ['latin'] });

export default function Home({ productsData }) {
  const {categoriesData} = useContext(AppContext)

  console.log(categoriesData)

  return (
    <>
      <Carousel /> 
      <Categories categoriesData={categoriesData} />
      <PopularCarousel productsData={productsData} /> 
    </>
  );
}

export const getStaticProps = async () => {
  const productsResponse = await contentful.getEntries({ content_type: 'products', 'fields.isPublic': 'true'});
  const productsData = productsResponse.items;

  return {
    props: {
      productsData,
    }
  }
}
