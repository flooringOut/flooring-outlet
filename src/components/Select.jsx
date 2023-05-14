import React from 'react'
import { Dropdown } from 'flowbite-react'
import Link from 'next/link';

// const getCategories = async () => {
//     const res = await contentful.getEntries({ content_type: 'categories'});
//     return res.items;
// }

const categories = [
    {
      id: '6CizsOUyPbOEEVcH8tdZfR',
      image: 'https://images.ctfassets.net/nh8d3zlw9jyt/6KJBtCGTnU4RszH7QgvrLl/00fd28e6f16b678f21f3232b3b26c6b7/image-000.jpg',
      name: 'Sunshine Home scene ',
      slug: 'sunshine-home-scene'
    },
    {
      id: '4aLmF5NR6uJirfWBkYbo20',
      image: 'https://images.ctfassets.net/nh8d3zlw9jyt/7EPVcfvAsvIDFX3yBy9taJ/31243af6076ca864804c2f5b99a0a726/image-000.jpg',
      name: 'Rustic Home Scene',
      slug: 'rustic-home-scene'
    },
    {
      id: '6jDe8cX8X7stELpJeGSY7u',
      image: 'https://images.ctfassets.net/nh8d3zlw9jyt/38TSsIvHjiND0qgxSjy1iJ/4cec6840225ed71300b8fbe4a1c68377/image-000__1_.jpg',
      name: 'Adisa Home Scene',
      slug: 'adisa-home-scene'
    },
    {
      id: '2xvzJYLPFnlbs6ugzmdsqP',
      image: 'https://images.ctfassets.net/nh8d3zlw9jyt/5uYSIo92x8p7GoivfL1uwd/bf7869a13045c9e5ad92b010f9193c6e/image-000.jpg',
      name: 'Noor Home Scene',
      slug: 'noor-home-scene'
    }
  ]

function Select({ title }) {
//   const categories = transformCategories(await getCategories())
//   console.log(categories)



  return (
    <div className='flex items-center py-2 px-3 hover:bg-primary hover:text-white' id='products-menu'>
        <Dropdown
        label="PRODUCTS"
        inline={true}
        size="lg"
        >
            {categories.map((el) => (
                <Dropdown.Item className='text-md' key={el.id}>
                    <Link href={`/categories/${el.slug}`} className='text-base'>{el.name}</Link>
                </Dropdown.Item>
            ))}
        </Dropdown>
    </div>
  )
}

export default Select