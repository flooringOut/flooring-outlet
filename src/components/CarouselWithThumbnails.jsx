import Image from 'next/image';
import React, { useState } from 'react';

function CarouselWithThumbnails({ data }) {
  const [selectedId, setSelectedId] = useState(0);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className='flex-1 flex flex-col gap-12'>
      <div className='max-h-[200px] md:max-h-[400px] overflow-hidden'>
        <Image
          width={400}
          height={500}
          src={data?.[selectedId]}
          alt='floor product'
        />
      </div>
      <div className='flex gap-6'>
        {data?.map((slide, id) => (
          <div
            key={slide.id}
            className={`max-h-[100px] overflow-hidden cursor-pointer hover:opacity-70 ${
              selectedId === id ? 'border-black border-2' : ''
            }`}
          >
            <Image
              onClick={() => handleClick(id)}
              src={slide}
              alt='product thumbnail'
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselWithThumbnails;
