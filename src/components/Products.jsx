import Link from 'next/link';
import React from 'react';
import LinkButton from './LinkButton';
import Product from './Product';

const products = [
  {
    id: 1,
    name: 'LUXURY VINYL FLOORING',
    image: '/popular/p1.jpg',
  },
  {
    id: 2,
    name: 'PORCELAIN TILE & CERAMIC TILE',
    image: '/popular/p2.jpg',
  },
  {
    id: 3,
    name: 'WATERPROOF HYBRID RIGID CORE',
    image: '/popular/p3.jpg',
  },
];

const Products = ({ title }) => {
  return (
    <div className='container mt-28'>
      {title && <h1 className='text-lg text-primary mb-8'>{title}</h1>}
      <div className='flex flex-col gap-5 md:flex-row items-center'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className='w-full text-center mt-28'>
        <LinkButton href='/products' className='text-base rounded'>
          DISCOVER MORE
        </LinkButton>
      </div>
    </div>
  );
};

export default Products;
