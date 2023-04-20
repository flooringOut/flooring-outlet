import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import Carousel from '@/src/components/Carousel';
import Products from '@/src/components/Products';

const OpenSans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={OpenSans.className}>
      <Carousel />
      <Products title='MOST POPULAR' />
    </main>
  );
}
