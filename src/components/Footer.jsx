import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import Light_LOGO from '../../public/logo-light.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { BsChatDots } from 'react-icons/bs';

const NAV_ITEMS = {
  HOME: '/',
  PRODUCTS: '/products',
  ABOUT: '/about',
};

function Footer() {
  return (
    <>
      <div className='bg-primary p-6 flex justify-between gap-8 mt-52 items-center text-[#d1cdcd]'>
        <div className='container flex justify-between flex-wrap gap-2'>
          <Link href='/'>
            <Image
              src={Light_LOGO}
              className='w-[70px] md:w-[100px]'
              alt='Logo'
            />
          </Link>
          <div className='flex gap-6 items-center '>
            <Link href={NAV_ITEMS.PRODUCTS} className='underline text-base'>
              Products
            </Link>
            <Link href={NAV_ITEMS.ABOUT} className='underline text-base'>
              About
            </Link>
            <a
              href='tel:+1-770-882-8696'
              className='text-base flex gap-1 p-2 bg-white hover:opacity-70 text-black rounded-sm'
            >
              <p>Contact us</p>
              <BsChatDots />
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-0 md:gap-10 justify-center p-2'>
        <p className='py-4 text-center'>
          © https://max-blank.netlify.app 2023. All Rights Reserved.
        </p>

        <div className='flex gap-6 items-center justify-center'>
          <a href='https://web.facebook.com/the.flooring.outlet.usa'>
            <AiOutlineFacebook
              size={40}
              className='hover:opacity-70 cursor-pointer'
            />
          </a>
          <BsInstagram size={34} className='hover:opacity-70 cursor-pointer' />
          <a href='tel:+1-770-882-8696' target='_blank'>
            <BsWhatsapp size={34} className='hover:opacity-70 cursor-pointer' />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
