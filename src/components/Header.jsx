import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { RxArrowRight } from 'react-icons/rx';
import { AiFillPhone } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggle = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  return (
    <>
      <div className='container py-3 flex text-primary justify-between '>
        <div className=''>
          <Image src={Logo} className='w-[70px] md:w-[100px]' alt='Logo' />
        </div>
        <div className='flex items-center'>
          <div
            className='block md:hidden fill-secondary hover:opacity-70 cursor-pointer'
            onClick={onToggle}
          >
            <HiOutlineMenuAlt3 size={32} />
          </div>
          <nav
            className={`${
              isMenuOpen ? 'top-[120px]' : 'top-[-400px]'
            } absolute left-0 right-0 top-0 transition-all duration-200 bg-white md:static z-20 py-10 md:py-0`}
          >
            <ul className='block md:flex text-md md:text-base'>
              <Link
                href='/'
                className='py-3 px-5 hover:bg-primary hover:text-white transition-all flex justify-between items-center'
              >
                <p>HOME</p>
                <RxArrowRight size={26} className='md:hidden' />
              </Link>
              <Link
                href='/about'
                className='py-3 px-5 hover:bg-primary hover:text-white transition-all flex justify-between items-center'
              >
                <p>ABOUT</p>
                <RxArrowRight size={26} className='md:hidden' />
              </Link>
              <Link
                href='/products'
                className='py-3 px-5 hover:bg-primary hover:text-white transition-all flex justify-between items-center'
              >
                <p>PRODUCTS</p>
                <RxArrowRight size={26} className='md:hidden' />
              </Link>
            </ul>
            <div
              className='md:hidden mt-5 m-auto cursor-pointer flex justify-center'
              onClick={onToggle}
            >
              <IoIosCloseCircleOutline
                size={40}
                className='fill-secondary hover:opacity-70 cursor-pointer'
              />
            </div>
          </nav>
          <div className='w-[2px] h-[40%] bg-[#ccc] mx-5 md:mx-10' />
          <div>
            <BsWhatsapp
              size={30}
              className='fill-secondary hover:opacity-70 cursor-pointer'
            />
          </div>
        </div>
      </div>
      <div className='h-[1px] bg-[#cccccc]' />
      <div className='container text-primary flex gap-2 justify-end items-center mt-2'>
        <AiFillPhone size={25} />
        <h3>+1-202-555-0131</h3>
      </div>
    </>
  );
};

export default Header;
