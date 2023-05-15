import React from 'react'
import contentful from '@/api/contentful'
import { transformProducts } from '@/transformation';
import Products from '@/components/Products';

const getAllCategories = async () => {
  const category = await contentful.getEntries({content_type: 'categories'});
  console.log(category.items)
  return category.items;
}

const getCategoryIdBySlug = async (slug) => {
  const category = await contentful.getEntries({content_type: 'categories', 'fields.slug': slug});
  return category.items[0].sys.id;
}

const getCategoryProducts = async (id) => {
    const products = await contentful.getEntries({content_type: 'products', 'links_to_entry': id})
    return products.items;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();

  console.log(categories.map(category => ({ slug: category.fields.slug })))
  return categories.map(category => ({ slug: category.fields.slug }))
}

async function page({params}) {
  const categoryId = await getCategoryIdBySlug(params.slug)
  const products = await getCategoryProducts(categoryId);

  const productsData = transformProducts(products);
  
  return <Products title={''} products={productsData} isWrap />;
}

export default page