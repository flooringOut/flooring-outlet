import Products from '@/src/components/Products';
import React from 'react';

productsPage.title = 'PRODUCTS';

function productsPage() {
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

  return (
    <Products
      title='PRODUCTS'
      products={[...products, ...products]}
      withButton={false}
      isWrap
    />
  );
}

export default productsPage;
