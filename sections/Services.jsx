"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import "../styles/gradient.css";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Services = () => (
  <section className={`${styles.paddings} md:py-24 bg-gray-200 dark:bg-gray-600 relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About T-pro Signature" textStyles="text-center md:text-[30px] font-bold dark:text-gray-200" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal text-[14px] md:text-[24px] text-center text-secondary-white dark:text-white"
      >
        Welcome to our world of beauty, creativity, and elegance! Our website
        offers a wide range of services in beauty, bead making, and event
        decoration that are tailored to your specific needs and preferences. We
        are committed to providing you with the best quality products and
        services that will leave you feeling and looking your absolute best.
        {/* Our
        beauty section offers a variety of services including hair styling,
        makeup, skincare, and nail services. Our team of experienced
        professionals uses the latest techniques and products to ensure that you
        look and feel your best. Whether you're looking for a simple touch-up or
        a full glam makeover, we have you covered. Our bead making section
        offers a variety of handcrafted beaded jewelry that is unique and
        stylish. Our pieces are made from high-quality materials and are perfect
        for any occasion. We also offer beading classes for those who want to
        learn how to make their own beaded jewelry. Our event decoration section
        offers a variety of services including floral arrangements, balloon
        decorations, and event planning. We understand that every event is
        unique and we work closely with you to create the perfect ambiance and
        decor for your special day. At our website, we pride ourselves on our
        exceptional customer service and attention to detail. We understand that
        every customer has different needs and preferences, and we strive to
        exceed your expectations every time. Whether you're looking for a simple
        service or a complete transformation, we are here to help you achieve
        your desired look and feel. Thank you for choosing our website for all
        your beauty, bead making, and event decoration needs! */}
      </motion.p>

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
