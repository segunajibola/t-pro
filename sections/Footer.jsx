'use client';

import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="py-4 bg-gray-200 dark:bg-gray-500 text-gray-700 dark:text-gray-300 relative"
  >
    <div className="footer-gradient" />
    <div className="mx-auto flex flex-col gap-8">
      <div className="flex flex-col">

        <div className="mb-[30px] h-[2px] bg-gray-500 opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4 p-6">
          <h4 className="font-bold text-[24px]">
            T-PRO
          </h4>
          <p className="font-normal text-[18px]">
            Made with ❤ by  <a href="https://www.segunajibola.com" className='underline'>Segun Ajibola.</a>
          </p>
          <p className="font-normal text-[14px] opacity-50">
            Copyright © {new Date().getFullYear()} T-pro Signature. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
