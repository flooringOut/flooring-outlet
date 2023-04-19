import React from 'react';
import Image from 'next/image';

function Product({ product }) {
  const { name, image } = product;

  return (
    <div className='flex flex-col gap-3'>
      <Image src={image} alt='most popular' width={500} height={500} />
      <div className='font-bold text-primary text-center'>
        <h2 className='text-base'>{name}</h2>
      </div>
    </div>
  );
}

export default Product;
