import React from 'react';
import contentful from '@/api/contentful';
import { transformProduct } from '@/transformation';
import Image from 'next/image';

const Products = ({ productData }) => {
  const product = transformProduct(productData);

  return (
    <div className='container mt-12 md:mt-22 flex flex-col gap-8'>
        <div>
            <h2 className='text-lg'>{product.name}</h2>
        </div>
        <div>
            <Image
                src={product.image}
                alt='most popular'
                width={1000}
                height={1000}
                // className='h-[200px] md:h-[240px]'
            />
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const productsResponse = await contentful.getEntries({content_type: 'products'});
    const products = productsResponse.items;

    const paths = products.map((product) => ({
        params: { id: product.fields.slug }
    }))

    return {
        paths,
        fallback: false,
    };    
}

export const getStaticProps = async ({ params }) => {
    const categoryData = await contentful.getEntries({content_type: 'products', 'fields.slug': params.id});
    const productData = categoryData.items[0]

    
    return {
        props: {
            productData,
        }
    }
};

export default Products