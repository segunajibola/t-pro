"use client";

import { motion } from "framer-motion";
import { TypingText, ServiceCard } from "../components";
import "../styles/gradient.css";
import styles from "../styles";
import services from "../data/services";
import { fadeIn, staggerContainer } from "../utils/motion";


const Services = () => (
  <section
    className={`${styles.paddings} md:py-24 bg-gray-200 dark:bg-gray-600 relative z-10`}
    id="services"
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
        title="| Services"
        textStyles="text-center md:text-[30px] font-bold dark:text-gray-200"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 0.3)}
        className="mt-[8px] font-normal text-[14px] md:text-[24px] text-center text-secondary-white dark:text-white"
      >
        Specializing in Beauty & Decoration services.
      </motion.p>

      <div className="grid grid-cols-1 pt-20 md:-mt-5 md:pt-32 md:grid-cols-3 gap-4 h-full">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[50px] h-[50px] object-contain my-[28px] bg-gray-300 p-3 dark:bg-gray-500"
      />
    </motion.div>
  </section>
);

export default Services;
