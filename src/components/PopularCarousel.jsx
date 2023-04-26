import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import LinkButton from './LinkButton';
import ProductsList from '../../public/data/products.json';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper';

const PopularCarousel = () => {
  return (
    <div className='container mt-44'>
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
          {ProductsList.slice(6).map((el) => (
            <SwiperSlide key={el.id}>
              <Image
                src={el.image}
                alt='carousel image'
                width={100}
                height={100}
              />
              <div className='font-bold text-primary text-center mt-3'>
                <h2 className='text-base'>{el.name}</h2>
              </div>
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
