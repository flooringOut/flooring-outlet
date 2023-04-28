import Link from 'next/link';
import React from 'react';
import LinkButton from './LinkButton';
import Product from './Product';

const Products = ({ title, products, isWrap = false }) => {
  return (
    <div className='container mt-28'>
      {title && <h1 className='text-lg text-primary mb-8'>{title}</h1>}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-9 md:gap-x-10 md:gap-y-16 md:flex-row ${
          isWrap && 'flex-wrap'
        } `}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
