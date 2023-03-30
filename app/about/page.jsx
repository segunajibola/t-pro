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
      <Image src="/decoration.jpg" alt="" width={400} height={200} className="" />
    </div>
  </div>
);

export default MainAbout;
