"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../components";
import "../../styles/gradient.css";
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Image from "next/image";

const MainAbout = () => (
  <div className={`${styles.innerWidth}`}>
    <div className="flex gap-4 justify-between">
      <Image src="/makeup.jpg" alt="" width={200} height={200} className="" />
      <Image src="/decoration.jpg" alt="" width={200} height={200} className="" />
    </div>
  </div>
);

export default MainAbout;
