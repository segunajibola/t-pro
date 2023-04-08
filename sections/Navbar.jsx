"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaMoon,
  FaLightbulb,
  FaBars,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";
import styles from "../styles/index"

const Navbar = ({ handleMode, darkMode }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="p-6 fixed z-20 w-full h-[80px] shadow-sm flex justify-between items-center bg-gray-200 dark:bg-gray-500 text-gray-700 dark:text-gray-300"
    >
      <Link
        className="cursor-pointer text-3xl text-gray-800 dark:text-gray-200 leading-[30.24px] italic"
        href="/"
        onClick={() => window.scrollTo(0, 0)}
      >
        {/* <img
          src="/navbar/etherchannellogo.png"
          alt="Logo Image"
          style={{ width: "80px", height: "80px", borderRadius: "50px" }} 
        />*/}
        T-PRO SIGNATURE
      </Link>

      {/* menu */}
      <div className="flex gap-2">
        <ul className="hidden md:flex space-x-10 text-md font-semibold tracking-wide">
          <Link
            href="/"
            onClick={() => window.scrollTo(0, 0)}
            className={`${styles.navHover}`}
          >
            Home
          </Link>
          <span>|</span>
          <li className={`${styles.navHover}`}>
            <Link href="/about">About</Link>
          </li>
          <span>|</span>
          <li className={`${styles.navHover}`}>
            <a href="/#services">Services</a>
          </li>
          <span>|</span>
          <li className={`${styles.navHover}`}>
            <Link href="/beauty">Make-up</Link>
          </li>
          <span>|</span>
          <li className={`${styles.navHover}`}>
            <Link href="/contact">Contact</Link>
          </li>
          <span>|</span>
          <a href="https://wa.me/c/2347085596323">
            <FaWhatsapp size={20} />
          </a>
        </ul>

        {/* Dark/Light Mode */}
        <div
          onClick={handleMode}
          className="z-30 sm:ml-[3f0rem] md:mfl-0 cursor-pointer dark:text-gray-800"
        >
          {darkMode ? <FaLightbulb size={20}/> : <FaMoon size={20} />}
        </div>
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-30 cursor-pointer dark:text-gray-800"
      >
        {!nav ? <FaBars size={22} /> : <FaTimes size={22} className={nav ? text-white : ""} />}
      </div>

      {/* Mobile menu */}
      <ul
        id="nav"
        className={`rounded-l-full top-0 right-0 w-[35%] bg-gradient-to-r from-gra-1 via-gra-2 to-gra-3 opacity-80 p-10 pl-20 text-white fixed h-full z-20 ease-in-out duration-300 flex flex-col justify-center items-center dark:bg-gray-100 dark:text-gray-800 space-y-8 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" href="/about">
            About
          </Link>
        </li>

        <li className="py-2 text-3xl">
          <a
            onClick={handleClick}
            className="cursor-pointer"
            href="/#services"
          >
            Services
          </a>
        </li>
        <li className="py-2 text-3xl">
          <Link
            onClick={handleClick}
            className="cursor-pointer"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
