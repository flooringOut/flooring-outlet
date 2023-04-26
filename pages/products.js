import Products from '@/src/components/Products';
import React from 'react';
import ProductsList from '../public/data/products.json';

function productsPage() {
  return (
    <Products
      title='PRODUCTS'
      products={ProductsList}
      withButton={false}
      isWrap
    />
  );
}

export default productsPage;
