import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

function Footer() {
  return (
    <>
      <div className='bg-primary p-6 flex justify-center gap-8 mt-52 items-center text-[#d1cdcd]'>
        <div>
          <AiOutlineFacebook
            size={50}
            className='hover:opacity-70 cursor-pointer'
          />
        </div>
        <div>
          <BsInstagram size={44} className='hover:opacity-70 cursor-pointer' />
        </div>
        <div>
          <BsWhatsapp size={44} className='hover:opacity-70 cursor-pointer' />
        </div>
      </div>
      <p className='py-4 text-center'>
        © cheapflooring.com 2023. All Rights Reserved.
      </p>
    </>
  );
}

export default Footer;
