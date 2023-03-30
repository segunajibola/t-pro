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
      <h3>Founder</h3>
      <Image
        src="/decoration.jpg"
        alt=""
        width={400}
        height={400}
        className=""
      />
      <h2>KYLE OTSUJI</h2>
      <p>
        Kyle is Co-Owner and head of operations at Studio Sashiko.
        Kyle has worked within the Tattoo industry since 2007, receiving a Body
        Piercing apprenticeship. He most recently acted as manager at a shop
        practicing body piercing, before opening Studio Sashiko with his wife,
        Shaughnessy. Kyle’s creative direction with Studio Sashiko is highly
        influenced by a passion for high fashion, street fashion, design and
        architecture. His ability to spot and embrace creative trends has
        allowed Studio Sashiko to realize itself not only as a leader in quality
        and hyper-realistic work, but as a brand that is trail-blazing within
        the industry.
      </p>
      <span><a href="">Quick call</a></span>
    </div>
  </div>
);

export default MainAbout;
