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
    <div className="flex gap-4">
      <Image src="/makeup.jpg" alt="" className="w-32 h-40" />
      <Image src="/decoration.jpg" alt="" className="w-32 h-40" />
    </div>
  </div>
);

export default MainAbout;
