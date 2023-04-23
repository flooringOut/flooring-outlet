import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import Carousel from '@/src/components/Carousel';
import Products from '@/src/components/Products';
import PopularCarousel from '@/src/components/PopularCarousel';

const OpenSans = Open_Sans({ subsets: ['latin'] });

Home.title = 'HOME';

const products = [
  {
    id: 1,
    name: 'LUXURY VINYL FLOORING',
    image: '/popular/p1.jpg',
  },
  {
    id: 2,
    name: 'PORCELAIN TILE & CERAMIC TILE',
    image: '/popular/p2.jpg',
  },
  {
    id: 3,
    name: 'WATERPROOF HYBRID RIGID CORE',
    image: '/popular/p3.jpg',
  },
];

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'LUXURY VINYL FLOORING',
      image: '/popular/p1.jpg',
    },
    {
      id: 2,
      name: 'PORCELAIN TILE & CERAMIC TILE',
      image: '/popular/p2.jpg',
    },
    {
      id: 3,
      name: 'WATERPROOF HYBRID RIGID CORE',
      image: '/popular/p3.jpg',
    },
  ];
  return (
    <main className={OpenSans.className}>
      <Carousel />
      <PopularCarousel />
      {/* <Products title='MOST POPULAR' products={products} /> */}
    </main>
  );
}
