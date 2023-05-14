"use server"

import React from 'react';
import contentful from '@/api/contentful';

import { transformProducts } from '@/transformation';
import CarouselSwiper from './CarouselSwiper';

const getPopularProducts = async () => {
  "use server"

  const res = await contentful.getEntries({ content_type: 'products', 'fields.isPublic': 'true'});

  return res.items;
}

const PopularCarousel = async () => {
  const popularProducts = transformProducts(await getPopularProducts())
  
  return (
    <div className='container mt-32'>
      <h1 className='text-lg text-primary mb-8 border-b-2 w-fit border-secondary'>Most Popular</h1>
      <CarouselSwiper data={popularProducts} />
    </div>
  );
};

export default PopularCarousel;
