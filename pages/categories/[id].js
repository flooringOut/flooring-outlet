import React from 'react'
import contentful from '@/api/contentful'
import { transformProducts } from '@/transformation'
import Products from '@/components/Products';

const Category = ({ categoryData, productsData }) => {
  const products = transformProducts(productsData);

  return <Products title={''} products={products} isWrap />
}

export const getStaticPaths = async () => {
    const categoriesResponse = await contentful.getEntries({content_type: 'categories'});
    const categories = categoriesResponse.items;

    const paths = categories.map((category) => ({
        params: { id: category.fields.slug }
    }))

    return {
        paths,
        fallback: false,
    };    
}

export const getStaticProps = async ({ params }) => {
    const categoryData = await contentful.getEntries({content_type: 'categories', 'fields.slug': params.id});
    const categoryId = categoryData.items[0].sys.id;
 
    const productsResponse = await contentful.getEntries({content_type: 'products', 'links_to_entry': categoryId})
    const productsData = productsResponse.items;

    
    return {
        props: {
            productsData,
            categoryData
        }
    }
};

export default Category