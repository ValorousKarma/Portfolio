import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants/index.js';
import { logo, menu, close } from './../Assets/index.js';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-off-white`}
    >
      <div
        className={
          'w-full flex justify-between items-center max-w-7xl mx-auto'
        }
      >
        <Link
          to='/'
          className={'flex items-center gap-2'}
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt='logo'
            className={'w-9 h-9 object-contain'}
          />
          <p className='text-dark-green text-[18px] font-bold cursor-pointer flex'>
            Dylan Michalak
          </p>
        </Link>
        <ul className='list-none hidden md:flex gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? 'text-dark-green'
                  : 'text-light-green'
              } hover:text-dark-green text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                document
                  .getElementById(link.id)
                  .scrollIntoView(true);
                setActive(link.title);
              }}
            >
              <Link to={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 gray-gradient absolute top-20 mx-2 my-1 min-w-[140px] z-10 rounded-md`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'text-dark-green'
                      : 'text-light-green'
                  } font-poppins fond-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    document
                      .getElementById(link.id)
                      .scrollIntoView(true);
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <Link to={`#${link.id}`}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
