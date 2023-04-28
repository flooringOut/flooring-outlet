import CarouselWithThumbnails from '@/src/components/CarouselWithThumbnails';
import { useRouter } from 'next/router';
import React from 'react';
import ProductsList from '../../public/data/products.json';
import ProductDetails from '@/src/components/ProductDetails';

const Product = () => {
  const router = useRouter();
  const productId = router?.query?.id;

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
