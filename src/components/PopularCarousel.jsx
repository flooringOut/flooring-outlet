import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import LinkButton from './LinkButton';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper';

const products = [
  {
    id: 1,
    name: 'LUXURY VINYL FLOORING',
    image: '/most-popular/popular1.jpg',
  },
  {
    id: 2,
    name: 'PORCELAIN TILE & CERAMIC TILE',
    image: '/most-popular/popular2.jpg',
  },
  {
    id: 3,
    name: 'WATERPROOF HYBRID RIGID CORE',
    image: '/most-popular/popular3.jpeg',
  },
  {
    id: 4,
    name: 'LUXURY VINYL FLOORING',
    image: '/most-popular/popular4.jpeg',
  },
  {
    id: 5,
    name: 'PORCELAIN TILE & CERAMIC TILE',
    image: '/most-popular/popular5.jpeg',
  },
  {
    id: 6,
    name: 'WATERPROOF HYBRID RIGID CORE',
    image: '/most-popular/popular6.jpeg',
  },
  {
    id: 7,
    name: 'WATERPROOF HYBRID RIGID CORE',
    image: '/most-popular/popular7.jpeg',
  },
];

const PopularCarousel = () => {
  return (
    <div className='container mt-44 p-10'>
      <h1 className='text-lg text-primary mb-8'>Most Popular</h1>
      <div className='relative'>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          breakpoints={{
            400: { slidesPerView: 2, spaceBetween: 20 },
            900: { slidesPerView: 3, spaceBetween: 40 },
            1100: { slidesPerView: 4 },
          }}
          spaceBetween={50}
          className='mySwiper'
          id='popular-silder'
        >
          {products.map((el) => (
            <SwiperSlide key={el.id}>
              <Image
                src={el.image}
                alt='carousel image'
                width={100}
                height={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='w-full text-center mt-28'>
        <LinkButton href='/products' className='text-base rounded'>
          DISCOVER MORE
        </LinkButton>
      </div>
    </div>
  );
};

export default PopularCarousel;
