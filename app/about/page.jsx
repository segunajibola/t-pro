"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../components";
import "../../styles/gradient.css";
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Image from "next/image";

const MainAbout = () => (
  <div className={`${styles.innerWidth} w-[80%] mx-auto pt-24 pb-12`}>
    <div className="flex gap-4 justify-center">
      <Image src="/makeup.jpg" alt="" width={400} height={200} className="" />
      <Image
        src="/decoration.jpg"
        alt=""
        width={400}
        height={200}
        className=""
      />
    </div>
    <div className="mt-10">
      <TypingText
        title="| About T-pro Signature"
        textStyles="text-center md:text-[30px] font-bold dark:text-gray-200"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal text-[14px] md:text-[24px] text-center text-secondary-white dark:text-white"
      >
        Who We Are
      </motion.p>
      <p className="mt-8 text-center">
        We are committed to providing you with the best quality products and
        services that will leave you feeling and looking your absolute best. At
        our website, we pride ourselves on our exceptional customer service and
        attention to detail. We understand that every customer has different
        needs and preferences, and we strive to exceed your expectations every
        time. Whether you're looking for a simple service or a complete
        transformation, we are here to help you achieve your desired look and
        feel. Thank you for choosing our website for all your beauty, bead
        making, and event decoration needs!
      </p>
    </div>
  </div>
);

export default MainAbout;
