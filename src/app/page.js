import Carousel from '@/components/Carousel';
import PopularCarousel from '@/components/PopularCarousel';
import contentful from '@/api/contentful';
import Categories from '@/components/Categories';

Home.title = 'HOME';

export default async function Home() {
  return (
    <main>
      <Carousel />
      {/* <Categories />
      <PopularCarousel /> */}
    </main>
  );
}
