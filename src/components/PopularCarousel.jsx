import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

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
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className='container mt-44 p-10'>
      <h1 className='text-lg text-primary mb-8'>Most Popular</h1>
      <div className='relative'>
        <Swiper
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            400: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 2 },
            900: { slidesPerView: 3, spaceBetween: 40 },
            1100: { slidesPerView: 4 },
          }}
          spaceBetween={50}
          modules={[Navigation]}
          className='mySwiper'
          loop={true}
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
        <div
          ref={navigationPrevRef}
          className='py-2 px-3 border-2 border-primary absolute top-[43%] left-[-55px] flex justify-between z-[99] cursor-pointer'
        >
          <IoIosArrowBack size={25} />
        </div>
        <div
          ref={navigationNextRef}
          className='py-2 px-3 border-2 border-primary absolute top-[43%] right-[-55px] flex justify-between z-[99] cursor-pointer'
        >
          <IoIosArrowForward size={25} />
        </div>
      </div>
    </div>
  );
};

export default PopularCarousel;
