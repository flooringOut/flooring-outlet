'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import LinkButton from '../LinkButton';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper';

const CarouselSwiper = ({ data }) => {
  return (
    <>
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
          {data.map((el) => (
            <SwiperSlide key={el.id}>
              <div className=''>
                <Image
                  src={el.image}
                  alt='carousel image'
                  width={300}
                  height={300}
                  className='h-[250px] md:h-[300px] w-[300px]'
                />
                {/* <div className='font-bold text-primary text-center mt-3'>
                <h2 className='text-base'>{el.name}</h2>
              </div> */}
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
    </>
  )
}

export default CarouselSwiper