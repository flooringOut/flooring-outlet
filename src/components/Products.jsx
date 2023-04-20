import Link from 'next/link';
import React from 'react';
import LinkButton from './LinkButton';
import Product from './Product';

const Products = ({ title, products, withButton = true, isWrap = false }) => {
  return (
    <div className='container mt-28'>
      {title && <h1 className='text-lg text-primary mb-8'>{title}</h1>}
      <div
        className={`flex flex-col gap-x-10 gap-y-16 md:flex-row items-center ${
          isWrap && 'flex-wrap'
        } `}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {withButton && (
        <div className='w-full text-center mt-28'>
          <LinkButton href='/products' className='text-base rounded'>
            DISCOVER MORE
          </LinkButton>
        </div>
      )}
    </div>
  );
};

export default Products;
