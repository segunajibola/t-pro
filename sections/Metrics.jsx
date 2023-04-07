import React from "react";
import CountUp, { useCountUp } from "react-countup";
import styles from "../styles";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import "../styles/gradient.css";
import { fadeIn, staggerContainer } from "../utils/motion";

const Metrics = () => {
  return (
    <section
      className={`${styles.paddings} md:py-24 bg-gray-200 dark:bg-gray-600 relative z-10 h-[500px]`}
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
          title="| Metrics"
          textStyles="text-center md:text-[30px] font-bold dark:text-gray-200"
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal text-[14px] md:text-[24px] text-center text-secondary-white dark:text-white"
        >
          Quantitative results speak volumes
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-11/12 mx-auto pt-4 text-2xl mt-16 md:mt-32">
          <div className="text-center">
            <CountUp end={10} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Years of Experience</h5>
          </div>
          <div className="text-center">
            <CountUp end={100} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Clients</h5>
          </div>
          <div className="text-center">
            <CountUp end={200} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Events Decorated</h5>
          </div>
          <div className="text-center">
            <CountUp end={14} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Awards & Recognition</h5>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Metrics;
