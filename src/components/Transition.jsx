'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  initialState: {
    opacity: 0,
    x: -20,
  },
  animateState: {
    opacity: 1,
    x: 0,
  },
  exitState: {},
};

function PageTransition({ children }) {

  return (
    <AnimatePresence>
      <motion.div
        key={usePathname()}
        initial='initialState'
        animate='animateState'
        variants={variants}
        transition={{ duration: 0.75 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
