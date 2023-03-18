"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="p-6 relative"
  >
    <div className="mx-auto flex justify-between">
      <Link
        href="/"
        className="text-3xl mb-5 text-white text-center leading-[30.24px]"
      >
        T-PRO SIGNATURE
      </Link>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
