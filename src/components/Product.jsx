import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Product({ product }) {
  const { name, image } = product;

  return (
    <Link href={`/products/${product.id}`} className='flex flex-col gap-3'>
      <Image
        src={image}
        alt='most popular'
        width={500}
        height={500}
        className='h-[200px] md:h-[240px]'
      />
      <div className='font-bold text-primary text-center'>
        <h2 className='text-base'>{name}</h2>
      </div>
    </Link>
  );
}

export default Product;
