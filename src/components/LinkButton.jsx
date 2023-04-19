import Link from 'next/link';
import React from 'react';

const LinkButton = ({ children, className, href }) => {
  return (
    <Link
      href={href}
      className={'bg-primary px-4 py-6 text-white ' + className}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
