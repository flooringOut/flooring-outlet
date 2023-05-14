import Carousel from '@/components/Carousel';
import PopularCarousel from '@/components/PopularCarousel';
import contentful from '@/api/contentful';
import Categories from '@/components/Categories';

export const dynamic = 'force-dynamic'

Home.title = 'HOME';

export default function Home() {
  return (
    <main>
      <Carousel />
      <Categories />
      <PopularCarousel />
    </main>
  );
}
