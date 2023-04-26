import Image from 'next/image';
import React from 'react';
import { GiRotaryPhone } from 'react-icons/gi';
import { FaFax } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

About.title = 'ABOUT';

function About() {
  const contactItems = [
    {
      id: 1,
      title: 'PHONE',
      icon: <GiRotaryPhone size={52} />,
      value: '6788953080',
      href: `tel:6788953080`,
    },
    {
      id: 2,
      title: 'ADDRESS',
      icon: <FaFax size={38} />,
      value: '1092 Marietta ind dr, Marietta, GA, U.S',
      // href: `tel:${tel}`,
    },
    {
      id: 3,
      title: 'EMAIL',
      icon: <MdEmail size={42} />,
      value: 'hamzaalstud44@gmail.com',
      href: `mailto:hamzaalstud44@gmail.com`,
    },
  ];

  return (
    <div className='mt-20'>
      <div className='container flex gap-8 items-center flex-col md:flex-row'>
        <Image
          alt='about image'
          src='/about/ab1.jpg'
          width={500}
          height={500}
        />
        <h3 className='text-base flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-md text-primary border-b-2 pb-2 w-fit'>
              OUR PURPOSE:
            </h2>
            <h3>Our Purpose to make dreams attainable.</h3>
          </div>
          <div className='flex flex-col gap-2 '>
            <h2 className='text-md text-primary border-b-2 pb-2 w-fit'>
              OUR VALUES:
            </h2>
            <h3>
              Our Company&rsquo;s success comes down to the success of our
              people.
            </h3>
          </div>
          <p className='text-sm'>
            These desired traits and qualities shape our daily actions. When we
            live our values, we build deep, meaningful relationships with
            everyone we work with.
          </p>
        </h3>
      </div>
      <div className='bg-primary mt-32 py-20'>
        <div className='container text-white flex flex-col md:flex-row gap-20 justify-center items-center'>
          {contactItems.map((item) => (
            <div key={item.id} className='flex flex-col gap-4 items-center'>
              {item.icon}
              <h2 className='text-md'>{item.title}</h2>
              <a href={item.href}>
                <h3 className='text-base opacity-70 underline'>{item.value}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
