import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { styles } from '../styles';

const Footer = () => {


  return (
    <>
      <footer
        className={`${styles.paddingX} w-full flex items-center py-4 bottom-0 z-20 bg-primary/50`}
      >
        <div className="w-full flex justify-between items-start max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              <span className="sm:block hidden text-[#915EFF]">enkei</span>
            </p>
          </Link>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Nikki Bernardo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
