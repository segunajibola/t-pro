import React from "react";
import Image from "next/image";
import styles from "../styles";
import { motion } from "framer-motion";
import { TypingText, ServiceCard } from "../components";
import "../styles/gradient.css";
import { fadeIn, staggerContainer, slideIn } from "../utils/motion";

const Gallery = () => {
  return (
    <section
      className={`${styles.paddings} md:py-24 bg-gray-200 dark:bg-gray-600 relative z-10`}
    >
      <div className="gradient-03 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText
          title="| Gallery"
          textStyles="text-center md:text-[30px] font-bold dark:text-gray-200"
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal text-[14px] md:text-[24px] text-center text-secondary-white dark:text-white"
        >
          Explore Our Creations
        </motion.p>
        <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 gap-4 mt-16 md:mt-32">
          <div className="col-span-1">
            <div className="w-full h-full">
              <motion.img
                variants={slideIn("left", "tween", 0.1, 0.2)}
                src="/makeup.jpg"
                width={400}
                height={400}
                className="rounded-2xl object-cover object-center w-full h-full"
                alt=""
                priority
              />
            </div>
          </div>
          <div className="col-span-1 row-span-2 md:row-span-1">
            <div className="w-full h-full">
              <motion.img
                variants={slideIn("right", "tween", 0.1, 0.2)}
                src="/decoration.jpg"
                width={400}
                height={400}
                className="rounded-2xl object-cover object-center w-full h-full"
                alt=""
                priority
              />
            </div>
          </div>
          <div className="col-span-1 md:row-span-2">
            <div className="w-full h-full">
              <motion.img
                variants={slideIn("left", "tween", 0.1, 0.2)}
                src="/bead-making.jpg"
                width={400}
                height={400}
                className="rounded-2xl object-cover object-center w-full h-full"
                alt=""
                priority
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-2">
            <div className="w-full h-full">
              <motion.img
                variants={slideIn("left", "tween", 0.1, 0.2)}
                src="/makeup.jpg"
                width={400}
                height={400}
                className="rounded-2xl object-cover object-center w-full h-full"
                alt=""
                priority
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full h-full">
              <motion.img
                variants={slideIn("left", "tween", 0.1, 0.2)}
                src="/decoration.jpg"
                width={400}
                height={400}
                className="rounded-2xl object-cover object-center w-full h-full"
                alt=""
                priority
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="w-full h-full">
              <motion.img
                variants={slideIn("right", "tween", 0.1, 0.2)}
                src="/bead-making.jpg"
                width={400}
                height={400}
                className="rounded-2xl object-cover object-center w-full h-full"
                alt=""
                priority
              />
            </div>
          </div>
        </div>
        <motion.img
          variants={fadeIn("up", "tween", 0.1, 0.3)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[50px] h-[50px] object-contain my-[28px] bg-gray-300 p-3 dark:bg-gray-500"
        />
      </motion.div>
    </section>
  );
};

export default Gallery;
