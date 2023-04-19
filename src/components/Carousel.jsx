import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Carousel4 from '../../public/c1.jpg';
import Carousel2 from '../../public/c2.jpg';
import Carousel3 from '../../public/c3.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper';

const Carousel = () => {
  return (
    <div className='mt-2 h-[50vh] md:h-[60vh] lg:h-[80vh]'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        className='mySwiper'
        loop={true}
        autoplay={{ disableOnInteraction: false, delay: 4000 }}
      >
        <SwiperSlide>
          <Image
            src={Carousel4}
            alt='carousel image'
            width={700}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Carousel2}
            alt='carousel image'
            width={700}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Carousel3}
            alt='carousel image'
            width={700}
            height={700}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
