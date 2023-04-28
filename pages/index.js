import { Open_Sans } from 'next/font/google';
import Carousel from '@/src/components/Carousel';
import PopularCarousel from '@/src/components/PopularCarousel';

const OpenSans = Open_Sans({ subsets: ['latin'] });

Home.title = 'HOME';

export default function Home() {
  return (
    <main className={OpenSans.className}>
      <Carousel />
      <PopularCarousel />
    </main>
  );
}
