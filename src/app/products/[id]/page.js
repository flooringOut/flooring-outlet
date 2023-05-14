'use client';

import CarouselWithThumbnails from '@/components/CarouselWithThumbnails';
import { useParams } from 'next/navigation';
import React from 'react';
import ProductsList from '../../../../public/data/products.json';
import ProductDetails from '@/components/ProductDetails';

const getCategories = async () => {
  const res = await contentful.getEntries({ content_type: 'products', 'links_to_entry': '4aLmF5NR6uJirfWBkYbo20' });
  // const res = await contentful.getEntries({ content_type: 'products', 'fields.category.fields.name': 'Noor Home Scene' });

  return res.items;
}

const Product = () => {
  const { id : productId } = useParams();

  console.log(productId)

  const images = ProductsList[productId - 1]?.images;

  const product = ProductsList[productId - 1];

  return (
    <div className='container flex mt-14 md:mt-24 gap-12 md:gap-0 flex-col md:flex-row'>
      <CarouselWithThumbnails data={images} />
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
