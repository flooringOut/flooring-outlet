import React from 'react';
import contentful from '@/api/contentful';

import { transformProducts } from '@/transformation';
import CarouselSwiper from './CarouselSwiper';


const PopularCarousel = ({ productsData }) => {
  const popularProducts = transformProducts(productsData)
  console.log({productsData})
  
  return (
    <div className='container mt-32'>
      <h1 className='text-lg text-primary mb-8 border-b-2 w-fit border-secondary'>Most Popular</h1>
      <CarouselSwiper data={popularProducts} />
    </div>
  );
};

export default PopularCarousel;
