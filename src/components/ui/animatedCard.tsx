'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type Props = HTMLMotionProps<'div'> & {
  children: ReactNode;
};

export default function AnimatedCard({ children, className = '', ...props }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      {...props}
      className={`
        bg-gray-800
        rounded-2xl
        border
        border-gray-700
        p-6
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
