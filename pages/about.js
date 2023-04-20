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
      // href: `tel:${tel}`,
    },
    {
      id: 2,
      title: 'ADDRESS',
      icon: <FaFax size={38} />,
      value: '3020 commerce way se , Atlanta, GA, U.S 30354',
      // href: `tel:${tel}`,
    },
    {
      id: 3,
      title: 'EMAIL',
      icon: <MdEmail size={42} />,
      value: 'example55@gmail.com',
      // href: `mailto:${email}`,
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
        <h3 className='text-base'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting,
        </h3>
      </div>
      <div className='bg-primary mt-32 py-20'>
        <div className='container text-white flex flex-col md:flex-row gap-20 justify-center items-center'>
          {contactItems.map((item) => (
            <div key={item.id} className='flex flex-col gap-4 items-center'>
              {item.icon}
              <h2 className='text-md'>{item.title}</h2>
              <a href={item.href}>
                <h3 className='text-base opacity-70'>{item.value}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
