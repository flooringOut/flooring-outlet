import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DARK_LOGO from '../../public/logo-dark.jpeg';
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

  const arrowIcon = <RxArrowRight size={26} className='md:hidden' />;

  const activeRoute = router.route;

  const navItems = [
    { id: 1, name: 'HOME', link: '/', icon: arrowIcon },
    { id: 1, name: 'ABOUT', link: '/about', icon: arrowIcon },
    { id: 1, name: 'PRODUCTS', link: '/products', icon: arrowIcon },
  ];

  const onToggle = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  return (
    <>
      <div className='container py-3 flex text-primary justify-between '>
        <Link href='/'>
          <Image src={DARK_LOGO} className='w-[70px] md:w-[100px]' alt='Logo' />
        </Link>
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
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className='py-3 px-5 hover:bg-primary hover:text-white transition-all flex justify-between items-center'
                >
                  <p
                    className={`${
                      activeRoute === item.link
                        ? 'border-b-2 p-1'
                        : 'border-b-0'
                    }  `}
                  >
                    {item.name}
                  </p>
                  {item.icon}
                </Link>
              ))}
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
      <div className='container text-primary flex gap-8 justify-end items-center mt-2 pb-4'>
        <div className='flex gap-2'>
          <AiFillPhone size={25} />
          <h3 className='text-base'>+1-770-882-8696</h3>
        </div>
        <div className='relative'>
          <h3 className='text-md p-2 text-white bg-primary'>+3000</h3>
          <p className='text-sm text-center absolute left-[25%]'>Styles</p>
        </div>
      </div>
    </>
  );
};

export default Header;
