import React from 'react'
import contentful from '@/api/contentful';
import { transformCategories } from '@/transformation';
import Image from 'next/image';
import Link from 'next/link';

const getCategories = async () => {
    const res = await contentful.getEntries({ content_type: 'categories'});
    return res.items;
}

async function Categories() {
  const categories = transformCategories(await getCategories())
  
  return (
    <div className='mt-32 container'>       
      <h1 className='text-lg text-primary mb-8 border-b-2 w-fit border-secondary'>Categories</h1>
      <div className='grid gap-5 grid-cols-2 md:grid-cols-3'>
        {categories.map((category) => (
          <Link href={'/categories/' + category.slug} key={category.id} className='relative transition-all hover:scale-110'>
            <Image src={category.image} alt={category.name} width={400} height={400} className='flex-1 max-h-[240px] md:max-h-[400px]' />
            <div className='absolute top-0 w-[100%] h-[100%] bg-black opacity-40' />
            <div className='absolute w-[100%] h-[100%] top-0 flex justify-center items-center'>
              <p className='border-2 border-white p-2 text-base text-white'> {category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories