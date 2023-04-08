"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import "../styles/gradient.css";
import styles from "../styles";
import { fadeIn, staggerContainer, slideIn } from "../utils/motion";
import Link from "next/link";

const About = () => (
  <section
    className={`${styles.paddings} md:py-24 bg-gray-200 dark:bg-gray-600 relative z-10`}
  >
    <div className="gradient-04 z-0" />

    <TypingText
      title="| About T-pro Signature"
      textStyles="text-center md:text-[30px] font-bold dark:text-gray-200"
    />

    <motion.p
      variants={fadeIn("up", "tween", 0.2, 0.5)}
      className="mt-[8px] font-normal text-[14px] md:text-[24px] text-center text-secondary-white dark:text-white"
    >
      Who We Are
    </motion.p>

    <div className={`${styles.innerWidth} flex flex-col md:flex-row`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex justify-center items-center md:items-end flex-col md:w-1/2 text-center md:text-right`}
      >
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 0.3)}
          className="flex justify-end mt-[10px] font-normal mr-3 text-[19px] md:text-[23px] dark:text-white"
        >
          T-Pro Signature: The Art Of Beauty
        </motion.h2>

        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.3)}
          className="mt-[8px] font-normal mr-5 text-[17px] md:text-[20px] text-secondary-white dark:text-white"
        >
          Welcome to our world of beauty, creativity, and elegance! Our website
          offers a wide range of services in beauty, bead making, and event
          decoration that are tailored to your specific needs and preferences.
        </motion.p>
        <button className="bg-gray-100 p-3 my-3 mr-3 dark:text-white rounded-md">
          <Link href="/about" className="">
            More About Us
          </Link>
        </button>
      </motion.div>
      <div className="flex flex-col justify-center w-full mt-5 md:mt-0 md:w-[50%]">
        <motion.img
          variants={slideIn("right", "tween", 0.1, 0.3)}
          src="/wedding-makeup.jpg"
          alt="wedding make-up"
          className="bg-cfgover object-cover object-top rounded-2xl h-[70%] my-auto w-[100%]"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <motion.img
        variants={fadeIn("up", "tween", 0.1, 0.3)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[50px] h-[50px] object-contain my-[28px] bg-gray-300 p-3 dark:bg-gray-500"
      />
    </div>
  </section>
);

export default About;
