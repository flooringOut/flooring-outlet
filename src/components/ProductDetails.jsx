import React from 'react';

const ProductDetails = ({ product }) => {
  const details = product?.details || [];

  return (
    <div className='container flex-1'>
      <ul className='flex flex-col gap-1 md:gap-2'>
        {Object.keys(details)?.map((el) => (
          <li key={el} className='text-base flex gap-6'>
            <p className='font-bold'>{el} : </p>
            <p>{details[el]} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
