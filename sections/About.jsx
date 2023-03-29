"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import "../styles/gradient.css";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section
    className={`${styles.paddings} md:py-24 bg-gray-200 dark:bg-gray-600 relative z-10`}
  >
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About T-pro Signature"
        textStyles="text-center md:text-[30px] font-bold dark:text-gray-200"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.1, 0.3)}
        className="mt-[8px] font-normal text-[14px] md:text-[24px] text-center text-secondary-white dark:text-white"
      >
        Welcome to our world of beauty, creativity, and elegance! Our website
        offers a wide range of services in beauty, bead making, and event
        decoration that are tailored to your specific needs and preferences. We
        are committed to providing you with the best quality products and
        services that will leave you feeling and looking your absolute best. At
        our website, we pride ourselves on our exceptional customer service and
        attention to detail. We understand that every customer has different
        needs and preferences, and we strive to exceed your expectations every
        time. Whether you're looking for a simple service or a complete
        transformation, we are here to help you achieve your desired look and
        feel. Thank you for choosing our website for all your beauty, bead
        making, and event decoration needs!
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.1, 0.3)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[50px] h-[50px] object-contain my-[28px] bg-gray-300 p-3 dark:bg-gray-500"
      />
    </motion.div>
  </section>
);

export default About;
